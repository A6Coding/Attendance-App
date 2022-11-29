var studentsList = [];

function submit() {
    var name1 = document.getElementById("name_of_the_student_1").value;
    var name2 = document.getElementById("name_of_the_student_2").value;
    var name3 = document.getElementById("name_of_the_student_3").value;
    var name4 = document.getElementById("name_of_the_student_4").value;

    studentsList.push(name1);
    studentsList.push(name2);
    studentsList.push(name3);
    studentsList.push(name4);

    console.log(studentsList);

    document.getElementById("display_name").innerHTML = studentsList;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
};

function sorting() {
    studentsList.sort();
    console.log(studentsList);
    document.getElementById("display_name").innerHTML = studentsList;
} 