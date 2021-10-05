import Capture from "./image/Capture.PNG";
import Capture1 from "./image/Capture1.PNG";
import image from "./image/image.png";
import setting from "./image/setting.jpg";
import rocket from "./image/rocket.png";

const Page = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", display: "flex" }}>
        <span>
          <h3>Company Name</h3> 
        </span>
        <div
          style={{
            display: "flex",
            gap: "10px",
            position: "relative",
            left: "58%",
          }}
        >
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Home</h5>
          </span>
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Why us</h5>
          </span>
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Service</h5>
          </span>
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Galary</h5>
          </span>
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Team</h5>
          </span>
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Blog</h5>
          </span>
          <span>
            <h5 style={{ position: "relative", top: "6px" }}>Contact</h5>
          </span>
          <span>
            <button style={{ position: "relative", top: "20px",backgroundColor:"slategray" }}>
              About Us
            </button>
          </span>
        </div>
      </div>
      <img src={Capture} style={{ width: "100%" }} />

      <p style={{ textAlign: "center", width: "100%" }}>
        Loream ipsum is simply dummy text of printing and typscripting
        industryam ipsum has
        <br/> been the industry's standard summt text ecer since the 1500
      </p>
      <div style={{ textAlign: "center", position: "relative", left: "17%" }}>
        <div style={{ display: "flex", gap: "4%", width: "100%" }}>
          <div>
            <img
              src={image}
              style={{
                width: "30%",
                height: "50px",
                position: "relative",
                left: "0%",
              }}
            />
            <h2 style={{ position: "relative", left: "0%" }}>Why choose us</h2>
            <p>
              Loream ipsum is simply dummy text
              <br />
              of printing and typscripting
              <br />
              industry
            </p>
          </div>
          <div>
            <img
              src={rocket}
              style={{
                width: "30%",
                height: "50px",
                position: "relative",
                left: "0%",
              }}
            />
            <h2 style={{ position: "relative", left: "0%" }}>Our mission</h2>
            <p>
              Loream ipsum is simply dummy text <br />
              of printing and typscripting
              <br />
              industry
            </p>
          </div>
          <div>
            <img
              src={setting}
              style={{
                width: "30%",
                height: "50px",
                position: "relative",
                left: "0%",
              }}
            />
            <h2 style={{ position: "relative", left: "0%" }}>What we do</h2>
            <p>
              Loream ipsum is simply dummy text <br />
              of printing and typscripting
              <br />
              industry
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex",width:"100%",backgroundColor:"whitesmoke"}}>
        <div style={{position:"relative",left:"10%"}} >
          <h3 >The Company You Can Trust</h3>
          <p >
            Loream ipsum is simply dummy text of printing and typscripting<br/>
            industryam ipsum has been the industry's standard summt text<br/> ecer
            since the 1500 when a unknown printer took a gallet of type and<br/>
            scrambled it to make a type book.it has survived not only five<br/>
            centuries ,but also the leao into electronic typescripting.it was
            popularised<br/> in the 1960s with the realese<br/> of largest sheet
            containing loream ipsum passages
          </p>
        </div>
        <div style={{position:"relative",left:"20%"}} ><img src={Capture1} style={{width:"170%"}}/></div>
        
      </div>
    </div>
  );
};
export default Page;
