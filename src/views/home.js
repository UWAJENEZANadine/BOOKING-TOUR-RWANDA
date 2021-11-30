import React from "react";
import logo from "../assets/undraw.PNG";
import logo2 from "../assets/img/1.jpg";
import logo3 from "../assets/img/img11.jpg";
import logo1 from "../assets/img/download.jpg";
import HomeLayout from "../components/HomeLayout";
import "./home.css"
const Home = () => {
    return (
        <HomeLayout>
            <div className="home-log">
                <h1>Rwanda booking tours</h1>

            </div>
            <div className="qutoe-div">
                <h2>Book Tour with us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut voluptatum tempore, ea sapiente
                    dicta obcaecati dolorem doloremque omnis
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut voluptatum tempore, ea sapiente
                    dicta obcaecati dolorem doloremque omnis cum hic
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut voluptatum tempore, ea sapiente
                    dicta obcaecati dolorem doloremque omnis </p>

            </div>
            <div className="line-container">
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
            </div>
            <div className="middle-container">
                <div className="left">
                    <h3>Book Your Tour Now!</h3>
                    <label>Tour your category</label><br />
                    <select id="category">
                        <option for="category" value="Forest">Forest</option>
                        <option for="category" value="Lakes">Lakes</option>
                        <option for="category" value="Animals">Animals</option>
                        <option for="category" value="Volcanoes">Volcanoes</option>
                        <option for="category" value="Swamps">Swamps</option>
                    </select><br /><br />
                    <label>Tour Location</label><br />
                    <select id="category"><br />
                        <option for="category" value="Musanze">Musanze</option>
                        <option for="category" value="Kirehe">Kirehe</option>
                        <option for="category" value="Nyamagabe">Nyamagabe</option>
                        <option for="category" value="Karongi">Karongi</option>
                        <option for="category" value="Ngororero">Ngororero</option>
                    </select>
                    <a href="./tours"><button>Search Now</button></a>

                </div>
                <div className="right">
                    <img src={logo}></img>

                </div>
            </div>
            <div className="heder"><h4>Tour packages</h4></div>
            <div className="container-item">

                <div className="animal-container">
                    <img src={logo2}></img>
                    <div className="overlay">
                        <div class="text"> Combined nyumgwe and akagera National park<br />
                            <a href="./gallelly">view more...</a>

                        </div>

                    </div>
                </div>
                <div className="lakes-container">
                    <img src={logo3}></img>
                    <div class="text"> Combined nyumgwe and akagera National park<br />
                        <a href="./gallelly">view more...</a>

                    </div>


                </div>
                <div className="forest-container">
                    <img src={logo1}></img>
                    <div class="text"> Combined nyumgwe and akagera National park<br />
                        <a href="./gallelly">view more...</a>

                    </div>

                </div>


            </div>




        </HomeLayout>



    )

}
export default Home;

