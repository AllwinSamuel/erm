import { Component } from "@slyte/component";

class MailpanelComp extends Component {
  constructor() {
    super();
  }
  init() {
    this.setData("users", this.$app.$ServiceProvider.getUsers());
    this.setData("sender", JSON.parse(localStorage.getItem("auth")).name);
  }
  data() {
    return {
      users: this.$app.prop("array"),
      receiver: this.$app.prop("string"),
      message: this.$app.prop("string"),
      sender: this.$app.prop("string"),
    };
  }

  static methods() {
    return {};
  }

  static actions() {
    return {
      sendMessage: function (e) {
        e.preventDefault();
        if (!this.data.message || !this.data.receiver) {
          this.$app.$ServiceProvider.toast("All fields are required!", "error");
          return;
        }
        try {
          var users = this.$app.$ServiceProvider.getUsers();
          users.forEach((user) => {
            if (user.employeeNumber === this.data.receiver) {
              user.message.push({
                sender: this.data.sender,
                content: this.data.message,
              });
            }
          });
          localStorage.setItem("users", JSON.stringify(users));
          this.setData("receiver", "");
          this.setData("message", "");
          this.$app.$ServiceProvider.toast(
            "message sent successfully",
            "success"
          );
        } catch (e) {
          console.error("Error updating user message:", e);
        }
      },
    };
  }

  static observers() {
    return {};
  }
}

export { MailpanelComp };
