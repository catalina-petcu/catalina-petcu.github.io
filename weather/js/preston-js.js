function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


var today = new Date();
var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var dayOfWeek = weekday[today.getDay()];
var dayOfMonth = today.getDate();
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = dayOfWeek + ", " + dayOfMonth + " " + curMonth + ", " + curYear;
console.log(document.querySelector("#currentDate").innerHTML = date);

if (weekday != 6) {
    document.getElementById("banner").style.display = "none"
}

/*
< h1 > Display Data: < span class = "tomato" > Table < span class = "tiny" > vs < /span> Flex <span class="tiny">vs</span > Column < span class = "tiny" > vs < /span> Grid</span > < /h1>

    <
    h2 > Table < /h2> <
    table >
    <
    thead >
    <
    tr >
    <
    th > 1 < /th> <
    th > 2 < /th> <
    th > 3 < /th> <
    th > 4 < /th> <
    th > 5 < /th> <
    th > 6 < /th> <
    /tr> <
    /thead> <
    tbody >
    <
    tr >
    <
    td >
    <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" > < br > Kitten 1 <
    /td> <
    td >
    <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" > < br > Kitten 2 < /td> <
    td >
    <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" > < br > Kitten 3 < /td> <
    td >
    <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" > < br > Kitten 4 <
    /td> <
    td >
    <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" > < br > Kitten 5 <
    /td> <
    td >
    <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" > < br > Kitten 6 <
    /td> <
    /tr> <
    /tbody> <
    /table>

    <
    h2 > Flex < /h2> <
    div class = "flex" >
    <
    div class = "flex-col" >
    <
    span class = "col-head" > 1 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 1 < /span> <
    /div> <
    div class = "flex-col" >
    <
    span class = "col-head" > 2 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 2 < /span> <
    /div> <
    div class = "flex-col" >
    <
    span class = "col-head" > 3 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 3 < /span> <
    /div> <
    div class = "flex-col" >
    <
    span class = "col-head" > 4 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 4 < /span> <
    /div> <
    div class = "flex-col" >
    <
    span class = "col-head" > 5 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 5 < /span> <
    /div> <
    div class = "flex-col" >
    <
    span class = "col-head" > 6 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 6 < /span> <
    /div> <
    /div>

    <
    h2 > Columns < /h2> <
    div class = "column" >
    <
    div class = "column-col" >
    <
    span class = "col-head" > 1 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 1 < /span> <
    /div> <
    div class = "column-col" >
    <
    span class = "col-head" > 2 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 2 < /span> <
    /div> <
    div class = "column-col" >
    <
    span class = "col-head" > 3 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 3 < /span> <
    /div> <
    div class = "column-col" >
    <
    span class = "col-head" > 4 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 4 < /span> <
    /div> <
    div class = "column-col" >
    <
    span class = "col-head" > 5 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 5 < /span> <
    /div> <
    div class = "column-col" >
    <
    span class = "col-head" > 6 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 6 < /span> <
    /div> <
    /div>

    <
    h2 > Grid < /h2> <
    div class = "grid" >
    <
    div class = "grid-col" >
    <
    span class = "col-head" > 1 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 1 < /span> <
    /div> <
    div class = "grid-col" >
    <
    span class = "col-head" > 2 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 2 < /span> <
    /div> <
    div class = "grid-col" >
    <
    span class = "col-head" > 3 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 3 < /span> <
    /div> <
    div class = "grid-col" >
    <
    span class = "col-head" > 4 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 4 < /span> <
    /div> <
    div class = "grid-col" >
    <
    span class = "col-head" > 5 < /span> <
    img src = "http://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 5 < /span> <
    /div> <
    div class = "grid-col" >
    <
    span class = "col-head" > 6 < /span> <
    img src = "https://placekitten.com/50/50"
alt = "kitten!" >
    <
    span class = "data" > Kitten 6 < /span> <
    /div> <
    /div>

    CSS

    @import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
    body {
        max - width: 640 px;
        margin: 0 auto;
        padding: 5 px;
    }
    h1 {
        font - size: 1.5 em;
        border - bottom: 1 px solid# abe;
        font - family: Acme, Arial, sans - serif;
    }
    h2 {
        font - size: 1 em;
        color: tomato;
        font - family: Acme, Arial, sans - serif;
        margin - left: 10 px;
    }
    .tiny {
        font - size: .8 rem;
    }
    .tomato {
        color: tomato;
    }

    .flex {
        display: flex;
        /* flex-direction: row; */
        /* let us combine row and wrap with flow 
        flex - flow: row wrap;
    }

    .flex - col {
            flex: 1 1 auto;
            background - color: #bed;
        }
        .flex - col, .column - col, .grid - col {
            border - bottom: 1 px solid #333;

	border-left: 1px solid # 333;
            text - align: center;
        }
        .flex - col: hover, td: hover, .column - col: hover, .grid - col: hover {
            opacity: 0.75;
            background - color: black;
            color: white;
        }
        .flex, .column, .grid {
            border - right: 1 px solid #333;

}



.col-head {

	display: block;

	padding: 5px;

	border-bottom: 1px solid # 333;
            text - align: center;
        }

    img {
        border - radius: 100 px;
        padding: 0.25 rem;
    }

    .data {
        display: block;
        padding: 0 5 px 5 px;
        font - size: 0.8 rem;
        text - align: center;
    }

    .col - head, th {
        font - weight: 700;
        font - size: 1 rem;
        background - color: black;
        color: white;
    }

    /* Table styling and layout with no extras
    table, th, td {
        border: thin solid #333;

	border-collapse: collapse;

	padding: 5px;

}



td {

	background-color: # bad;
        font - size: 0.8 rem;
        text - align: center;
    }

    /* Column styling and layout 
    .column {
        column - count: 6;
        column - gap: 0;
    }
    .column img {
        width: 50 % ;
    }
    .column - col {
            background - color: #abe;
        }

        /* Grid 
        .grid {
            display: grid;
            grid - template - columns: repeat(auto - fit, minmax(50 px, 1 fr));
        }
        .grid - col {
            background - color: tomato;
}

Overlay
main {
    margin: 0 auto;
}
h1 {
    text - align: center;
    font - size: 2.5 rem;
    text - shadow: 3 px 3 px 5 px #777;}



.herodiv {margin: 10px auto;}

h1, h2, p {margin: 0;}



.stats {

	background: radial-gradient(# eee, #4567aa);

	border: 1px solid # 000;
    padding: 1.5 rem;
    box - shadow: 0 0 30 px #333;

	opacity: .95;

}



@media only screen and (min-width: 37.5em) {

	main {max-width:820px}

	

	.herodiv {position: relative;}

	

	.stats {

		position: absolute;

		top: 150px;

		left: 20px;}

}

< main >
    <
    h1 > Overlay Example < /h1> <
    div class = "herodiv" >
    <
    img src = "http://placekitten.com/800/300"
alt = "hero image" >
    <
    section class = "stats" >
    <
    h2 > Statistics < /h2> <
    p > Gender: < span id = "gender" > Female < /span></p >
    <
    p > Age: < span id = "age" > 2.5 < /span></p >
    <
    p > Shots ? : < span id = "shots" > Yes < /span></p >
    <
    /section> <
    /div> <
    /main>
*/