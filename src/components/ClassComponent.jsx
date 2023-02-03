/**
 * 
 *  1. Tạo 1 file ClassComponent.js chứa HTML : <p>Xin chào ReactJS, hiển thị HTML sử dụng Class Component<p> 
2. Import vào index.js, Hiển thị Class Component đã tạo vào thẻ Div Root (Thay thế component   <App />)
3. Import ClassComponent vào App.js, thay thế nội dung HTML trong <App /> bằng ClassComponent, hiển thị nội dung ClassComponent lên trình duyệt.
 */

import { Component } from "react";



// function ClassConponent (){
// return (
//     <div>
//          <p>Xin chào ReactJS, hiển thị HTML sử dụng Class Component</p> 
//     </div>
// )
// }
// export default ClassConponent;



/**6
 *   Viết code trong ClassComponent.jsx như sau:
1. constructor(): 

Khởi tạo biến object state = { show: "constructor", stateChange: ""};
Hiển thị console.log("Gọi đầu tiên " + state.show)
2. getDerivedStateFromProps() (Bản cũ componentWillReceiveProps() deprecated  ) 
Set lại giá trị show trong state thành "getDerivedStateFromProps"
Set lại giá trị stateChange trong state thành props.stateChange (nhận giá trị stateChange từ parent component App.jsx truyền vào)
Yêu cầu Hiển thị console.log("Constructor gọi đầu tiên, Gọi "+ state.show + " trước khi render ra HTML ")
3. render()
Set lại giá trị show trong state thành "render"
Yêu cầu hiển thị console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, "+ state.show + "HTML")
4. componentDidMount() 
Set lại giá trị show trong state thành "componentDidMount"
Yêu cầu hiển thị console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, Render HTML, hiển thị HTML xong sẽ nhìn thấy" +state.show)

Xem console.log khi app chạy
 */
class ClassComponent extends Component{
constructor(props){
    super(props);
    this.state={
        show: "contructor",
        stateChange: ""
      }
      this.changeClassComponentState = this.changeClassComponentState.bind(this);
      
      console.log("1")
      console.log("Gọi đầu tiên " + this.state.show)
}
static getDerivedStateFromProps(props, state) {
    state = {
      show: "getDerivedStateFromProps",
      stateChange: props.stateChange
    }
    
    console.log("2")
    console.log("Constructor gọi đầu tiên, Gọi " + state.show + " state " + state.stateChange + " trước khi render ra HTML ");
    return state;
  }
  componentDidMount(state) {
    state = {
      show: "componentDidMount",
    }
    console.log("3")
    console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, Render HTML, hiển thị HTML xong sẽ nhìn thấy " + state.show)
  }

  changeClassComponentState = (state) => {
    state = {
      stateChange: "Click change state"
    }
    console.log("5")
    console.log(state.stateChange);
  }

  componentWillUnmount() {
    alert("ClassComponent unmount")
    
  }
  render(state) {
    state = {
      show: "render", stateChange: ""
    };
    console.log("4")
    console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, " + state.show + " HTML")
    return (
      <div>
        <button type="button" className="btn-component__change" onClick={this.changeClassComponentState}>Đổi Class Component props</button>
        {/* <p>Xin chào ReactJs, hiển thị HTML sử dụng Class Components Import</p> */}
      </div>
    )
  }
 
}
export default ClassComponent;