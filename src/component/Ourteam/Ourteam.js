import koyo from "../images/Koyo.png";
import Nancy from "../images/Nancy.png";
import Virginia from "../images/Virginia.png";
import Mitchie from "../images/mitchie.png";
import "./Ourteam.css"

function Ourteam() {
  return (
    <div  id="Team-stawi">
      <div className="meet-the-team">
        <h1>Team Behind StawiBrood</h1>
      </div>
      <div className="team">
        <div className="lady">
          <img src={koyo} alt='Koyo' width='70%' />
          <h4>Conslate Koyo</h4>
          <p>Software Developer</p>
        </div>
        <div className="lady">
          <img src={Virginia} alt = 'Virginia' width='70%' />
          <h4>Virginia Njeri</h4>
          <p>Software Developer</p>
        </div>
        <div className="lady">
          <img src={Nancy} alt = 'Nancy' width='70%' />
          <h4>Nancy Awour</h4>
          <p>Software Developer</p>
        </div>

        <div className="lady">
          <img src={Mitchie} alt = 'Michie' width='70%' />
          <h4>Mitchelle Hope</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
