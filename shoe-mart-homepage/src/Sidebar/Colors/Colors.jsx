import "./Colors.css";
import Input from "../../components/Input";
function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title price-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              
            }}
          ></span>White
        </label>
      </div>
    </div>
  );
}

export default Colors;
