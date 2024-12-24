import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
  "Service": function() {
    return Service;
  },

  "FormComp": function() {
    return FormComp;
  },

  "AlertComp": function() {
    return AlertComp;
  },

  "ToastComp": function() {
    return ToastComp;
  }
});

import {Service} from "/node_modules/@slyte/core/index.js";
import { ToastComp } from "/components/javascript/toast-comp";
import { FormComp } from "/components/javascript/form-comp";
import { AlertComp } from "/components/javascript/alert-comp";

class  ServiceProvider extends Service {
  validateUser(user){
    var {userName , password} = user;
    var updatedData = [
      {
        "employeeNumber": "emp101",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "8765432109",
        "address": "456 Oak Avenue, CA, USA",
        "department": "HR",
        "role": "Admin",
        "designation": "Manager",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp103",
        "name": "Alex Johnson",
        "email": "alex.j@example.com",
        "phone": "7654321098",
        "address": "789 Pine Road, TX, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Junior Accountant",
        "gender": "Non-binary",
        "password": "password"
      },
      {
        "employeeNumber": "emp104",
        "name": "Emily Brown",
        "email": "emily.b@example.com",
        "phone": "6543210987",
        "address": "321 Birch Lane, FL, USA",
        "department": "Marketing",
        "role": "Lead Developer",
        "designation": "Senior Associate",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp105",
        "name": "Michael Green",
        "email": "michael.g@example.com",
        "phone": "9876512345",
        "address": "654 Cedar Street, WA, USA",
        "department": "IT",
        "role": "Senior Developer",
        "designation": "Associate Engineer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp106",
        "name": "Sophia Wilson",
        "email": "sophia.w@example.com",
        "phone": "8765123498",
        "address": "789 Willow Lane, CO, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Senior Specialist",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp107",
        "name": "Chris Martinez",
        "email": "chris.m@example.com",
        "phone": "7651234598",
        "address": "456 Birch Avenue, TX, USA",
        "department": "IT",
        "role": "Admin",
        "designation": "Lead Engineer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp108",
        "name": "Olivia Taylor",
        "email": "olivia.t@example.com",
        "phone": "6547891230",
        "address": "321 Maple Street, FL, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp109",
        "name": "Liam Anderson",
        "email": "liam.a@example.com",
        "phone": "9877894561",
        "address": "123 Pine Drive, NY, USA",
        "department": "Marketing",
        "role": "Team Lead",
        "designation": "Junior Specialist",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp110",
        "name": "Ava Lee",
        "email": "ava.l@example.com",
        "phone": "8763217890",
        "address": "654 Oak Avenue, CA, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp111",
        "name": "Noah Harris",
        "email": "noah.h@example.com",
        "phone": "7659871234",
        "address": "789 Cedar Lane, TX, USA",
        "department": "IT",
        "role": "Senior Developer",
        "designation": "Developer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp112",
        "name": "Isabella Moore",
        "email": "isabella.m@example.com",
        "phone": "6541239876",
        "address": "123 Maple Street, CO, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Manager",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp113",
        "name": "Ethan White",
        "email": "ethan.w@example.com",
        "phone": "9874561230",
        "address": "456 Willow Drive, FL, USA",
        "department": "Marketing",
        "role": "Manager",
        "designation": "Senior Strategist",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp114",
        "name": "Mia Thompson",
        "email": "mia.t@example.com",
        "phone": "8766543210",
        "address": "789 Elm Road, CA, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Generalist",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp115",
        "name": "Lucas Perez",
        "email": "lucas.p@example.com",
        "phone": "7657891234",
        "address": "321 Birch Lane, TX, USA",
        "department": "IT",
        "role": "Lead Developer",
        "designation": "Senior Developer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp116",
        "name": "Amelia Evans",
        "email": "amelia.e@example.com",
        "phone": "6549873210",
        "address": "654 Pine Street, NY, USA",
        "department": "Finance",
        "role": "Senior Developer",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp117",
        "name": "Elijah Scott",
        "email": "elijah.s@example.com",
        "phone": "9873216540",
        "address": "123 Maple Drive, CO, USA",
        "department": "Marketing",
        "role": "Team Lead",
        "designation": "Writer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp118",
        "name": "Charlotte Martinez",
        "email": "charlotte.m@example.com",
        "phone": "8769871234",
        "address": "456 Cedar Road, FL, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Specialist",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp119",
        "name": "James Ramirez",
        "email": "james.r@example.com",
        "phone": "7653219876",
        "address": "789 Birch Avenue, TX, USA",
        "department": "IT",
        "role": "Lead Developer",
        "designation": "Engineer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp120",
        "name": "Harper Walker",
        "email": "harper.w@example.com",
        "phone": "6543219870",
        "address": "321 Pine Lane, CA, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      }
    ]
    localStorage.setItem("users",JSON.stringify(updatedData));
    var users = JSON.parse(localStorage.getItem("users"));
    var currentUser = users.filter(
      (user) => ((user.employeeNumber == userName || user.name == userName) && user.password == password)
    );
    if(currentUser[0]){
    localStorage.setItem("auth", JSON.stringify({"empNo":currentUser[0].employeeNumber,"role":currentUser[0].role,"name":currentUser[0].name}));
    this.$app.$router.navigateTo("home.profile");
    var url = `https://ui-avatars.com/api/?name=${currentUser[0].name.trim().charAt(0).toUpperCase()}&color=fff&background=${this.getRandomColor()}&rounded=true`;
    document.querySelector("#favicon").href = url;
    localStorage.setItem("faviconUrl",url);
    }
    else{
      return "Wrong Credentials!";
  }
  }

  getRole(){
    return JSON.parse(localStorage.getItem("auth")).role;
  }

  getUser(empNo){
    var users = this.getUsers();
    var user = users.filter((user) => user.employeeNumber == empNo)[0];
    var {password , ...remaining} = user;
    return remaining;
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users"))?.map(({ password, ...rest }) => rest); 
  }

  addUser(user){
   try{ var users = this.getUsers();
    var updatedUsers = [...users,user];
    localStorage.setItem("users",JSON.stringify(updatedUsers));
    this.toast("Employee added successfully","success");
    }catch(e){
      this.toast("ERROR! something went wrong","error");
    }
  }

  updateUser(employee){
    try{let users = this.getUsers();
    let updatedUsers = users.map((user) => {
      if (user.employeeNumber === employee.employeeNumber) {
        return { ...user, ...employee };
      }
      return user; 
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    this.toast("Employee details updated successfully","success");}
    catch(e){
      this.toast("ERROR! something went wrong","error");
    }
  }

  showFormComp(type,user){
    this.$app.$component.render(FormComp,{"type":type,"user":user},"#popup",{clearOutlet : true}); 
  }

  deleteUser(empNo){
      try{var updatedUsers = this.getUsers().filter((user) => user.employeeNumber !== empNo);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
         this.$app.$router.navigateBack();
      this.toast("Employee deleted successfully","success");}
      catch(e){
        this.toast("ERROR! something went wrong","error");
      }
  }

  toast(m,t){
    setTimeout(()=>{this.$app.$component.render(ToastComp,{message:m,type:t},"#toast");},1000);
  }

  getRandomColor() {
    var colors = [
      'F94144', 'F3722C', 'F8961E', 'F9C74F',
      '90BE6D', '43AA8B', '577590', '577590',
      'D7263D', '1B998B', '9A031E', '5F0F40'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  showAlert(h,c,perform){
    this.$app.$component.render(AlertComp,{header:h,content:c},"#toast",{
      methods : {"perform": function(){ perform();}},
      clearOutlet : true,
    });
  }

  _() {
    _;
  }
}
export  {ServiceProvider};