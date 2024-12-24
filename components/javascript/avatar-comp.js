import {Component} from "@slyte/component";

class AvatarComp extends Component {
	constructor() {
		super();
	}
  init(){
		this.$node.style.backgroundImage = `url("https://ui-avatars.com/api/?name=${this.data.name.trim().charAt(0).toUpperCase()}&color=fff&background=${this.$app.$ServiceProvider.getRandomColor()}&font-weight=900")`
	}
	 didConnect(){
		this.$node.addEventListener("click",()=>{
			this.$app.$router.navigateTo("home");
		})
	 }
	data() {
		return {
			name:this.$app.prop("string")
		}	
	}

	static methods() {
		return {
			
		}
	}

	static actions() {
		return {
			
		}
	}

	static observers() {
		return {
		}
	}

}

export {AvatarComp}; 
