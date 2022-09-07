<!--  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>mlvnworks || personal startup page</title>
</head>
<body>
    <?php include './page/image-modal.php'?>
    <?php include './page/askModal..php'?>
    <section class="main-section">
        <!-- wheather and toDo section -->
        <section id="wheather_toDo">   
            <div>
                <div id="wheather">
                    <img alt="icon" src="./extras/Assets/Vectorloading.png" id="wheather-icon">
                    <p id="temp">0</p>
                    <p id="text">loading...</p>
                </div>
                <div id="toDo">
                    <?php include './extras/logos_and_icons/toDo_logo.svg'?>
                    <p>toDo</p> 
                </div>
            </div>
        </section>

        <!-- search bar section -->
        <section id="search-section">
            <form action="#" id="form-search">
                <fieldset>
                    <legend>
                        Find something
                    </legend>
                    <input type="search" name="search" id="search-input" required>
                    <button>
                        <?php include './extras/logos_and_icons/search_magnifyer.svg'?>
                    </button>
                </fieldset>
            </form>
        </section>
        <!-- greet section -->
        <section id="greet_section">
            <div>
                <h1 id="greet">Good Evening</h1>
                <h1 id="name">Melvin</h1>
                <p id="inquirer">What do yo want today?</p>
            </div>
        </section>

    <!-- shorcuts, time, and background changer  -->
    <section id="footer">
        <div>
            <div id="time_bg">
                <div id="time">
                    <p>2:53 PM</p>
                    <p>9/3/22</p>
                </div>
                <div id="bg">
                    <?php include './extras/logos_and_icons/change_bg.svg'?>
                    <p>Background</p>
                </div>
            </div>
            <div class="overlay"></div>
            <div id="shortcuts">
                <div class="shortcut">
                    <img src="./extras/Assets/Vectorguthub_logo.png" alt="shortcut" id="github">
                    <p>GitHub</p>
                </div>
                <div class="shortcut">
                    <img src="./extras/Assets/Vectornetlify.png" alt="shortcut" id="netlify">
                    <p>Netlify</p>
                </div>
                <div class="shortcut">
                    <img src="./extras/Assets/Vectoryoutube.png" alt="shortcut" id="youtube">
                    <p>youTube</p>
                </div>
                <div class="shortcut">
                    <img src="./extras/Assets/Vectorfacebook.png" alt="shortcut" id="facebook">
                    <p>Facebook</p>
                </div>
                <div class="shortcut">
                    <img src="./extras/Assets/Vectorclassroom.png" alt="shortcut" id="classroom">
                    <p>Classroom</p>
                </div>
                <div class="shortcut">
                    <img src="./extras/Assets/logos_google-drivedrive.png" alt="shortcut" id="drive">
                    <p>Drive</p>
                </div>
                <div class="shortcut">
                    <img src="./extras/Assets/logos_google-gmailgmail.png" alt="shortcut" id="gmail">
                    <p>Gmail</p>
                </div>
                <div id="trig">
                    <button id="trig-btn">
                        <
                    </button>
                </div>
            </div>
        </div>
    </section>
    </section>
    <!-- when name input submited -->
    <?php
        if(isset($_POST['set'])){
            $name = filter_input(INPUT_POST, 'username',FILTER_SANITIZE_SPECIAL_CHARS);
            echo "<script>
                localStorage.setItem('username','". $name."');
            </script>";
        }
    ?>
    <script src="./js/userName.js"></script>
    <script src="./js/dom_effect.js"></script>
    <script src="./js/weather.js"></script>
    <script src="./js/search.js"></script>
    <script src="./js/greet.js"></script>
    <script src="./js/time.js"></script>
    <script src="./js/background.js"></script>
    <script src="./js/shortcut.js"></script>
    <script src="./main.js"></script>
</body>
</html>