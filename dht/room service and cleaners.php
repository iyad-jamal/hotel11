<?php
/**
 * Created by PhpStorm.
 * User: iyad jamal
 * Date: 4/19/2016
 * Time: 12:49 PM
 */
session_start();
if(!$_SESSION['login']) {

    ?>
    <h1 aligo="center" class="text-danger">you must logged in to reach this page</h1>
    <?php
    ob_start();

            header("Location:http://localhost:63342/hotel/dht/reg.html");
            ob_end_flush();


    /** YOUR LOGINBOX OUTPUT, ERROR MESSAGES ... **/
    ob_end_flush();
}
?>
