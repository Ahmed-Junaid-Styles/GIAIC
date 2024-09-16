var image_profile_pic = document.getElementById("img-preview");
var skills_list = document.querySelector(".skills_inps");
var add_skill = document.querySelector(".add_more_skill");
var remove_skill = document.querySelector(".remove_more_skill");
add_skill === null || add_skill === void 0 ? void 0 : add_skill.addEventListener('click', function () {
    skills_list.innerHTML += "<input class=\"skill_inp skill_inp_".concat(skills_list.childElementCount + 1, "\" type=\"text\" placeholder=\"Add skill\">");
});
remove_skill === null || remove_skill === void 0 ? void 0 : remove_skill.addEventListener('click', function () {
    var remove_skill_child = document.querySelector(".skill_inp_".concat(skills_list.childElementCount));
    if (skills_list.childElementCount > 1) {
        skills_list === null || skills_list === void 0 ? void 0 : skills_list.removeChild(remove_skill_child);
    }
});
var education_table = document.querySelector(".education_table");
var education_list = document.querySelector(".education_inps");
var add_education = document.querySelector(".add_more_education");
var remove_education = document.querySelector(".remove_more_education");
var education_info_list = [
    "<tr class=\"intermediate education_2 education\">\n                    <td class=\"level\">Intermediate: </td>\n                    <td><input class=\"intermediate_field field\" type=\"text\"></td>\n                    <td><input class=\"intermediate_grade grade\" type=\"text\"></td>\n                    <td><input class=\"intermediate_institution institution\" type=\"text\"></td>\n                    <td><input class=\"intermediate_year year\" type=\"text\"></td>\n                </tr>",
    "<tr class=\"graduation education_3 education\">\n                    <td class=\"level\">Graduation: </td>\n                    <td><input class=\"graduation_field field\" type=\"text\"></td>\n                    <td><input class=\"graduation_grade grade\" type=\"text\"></td>\n                    <td><input class=\"graduation_institution institution\" type=\"text\"></td>\n                    <td><input class=\"graduation_year year\" type=\"text\"></td>\n                </tr>",
    "<tr class=\"masters education_4 education\">\n                    <td class=\"level\">Masters: </td>\n                    <td><input class=\"masters_field field\" type=\"text\"></td>\n                    <td><input class=\"masters_grade grade\" type=\"text\"></td>\n                    <td><input class=\"masters_institution institution\" type=\"text\"></td>\n                    <td><input class=\"masters_year year\" type=\"text\"></td>\n                </tr>"
];
add_education === null || add_education === void 0 ? void 0 : add_education.addEventListener('click', function () {
    if (education_table.childElementCount && education_table.childElementCount < 4) {
        education_table.innerHTML += education_info_list[education_table.childElementCount - 1];
    }
});
remove_education === null || remove_education === void 0 ? void 0 : remove_education.addEventListener('click', function () {
    if (education_table.childElementCount > 1) {
        education_table === null || education_table === void 0 ? void 0 : education_table.removeChild(education_table.lastElementChild);
    }
});
var expirence_table = document.querySelector('.experience_table');
var add_more_experience = document.querySelector(".add_more_experience");
var remove_more_experience = document.querySelector(".remove_more_experience");
add_more_experience === null || add_more_experience === void 0 ? void 0 : add_more_experience.addEventListener('click', function () {
    expirence_table.innerHTML += "<tr class=\"experience_".concat(expirence_table.childElementCount, " experiences\">\n                    <td><input class=\"experience_workplace\" type=\"text\"></td>\n                    <td><input class=\"experience_year_from\" type=\"text\"></td>\n                    <td><input class=\"experience_year_to\" type=\"text\"></td>\n                    <td><input class=\"experience_position\" type=\"text\"></td>\n                </tr>");
});
remove_more_experience === null || remove_more_experience === void 0 ? void 0 : remove_more_experience.addEventListener('click', function () {
    if (expirence_table.childElementCount > 1) {
        expirence_table.removeChild(expirence_table.lastElementChild);
    }
});
var chooseFile = document.getElementById("choose-file");
var imgPreview = document.getElementById("img-preview");
chooseFile.addEventListener("change", function () {
    getImgData();
});
function getImgData() {
    console.log("run");
    var files = chooseFile.files[0];
    if (files) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            console.log("yesss");
            imgPreview.style.display = "block";
            imgPreview.innerHTML = "<img src=\"".concat(this.result, "\" class=\"profile_pic\" />");
            console.log("yesss 2");
        });
    }
}
var generated_resume = document.querySelector(".generated_resume");
var generate_btn = document.querySelector(".generate");
generate_btn.addEventListener("click", function () {
    var email = document.querySelector(".email");
    var email_value = email.value;
    var person_name = document.querySelector(".name");
    var person_name_value = person_name.value;
    var phone_number = document.querySelector(".phone_no");
    var phone_number_value = phone_number.value;
    var skill_inputs = document.querySelectorAll(".skill_inp");
    var skill_list = [];
    skill_inputs.forEach(function (e) {
        skill_list.push(e.value);
    });
    var work_experience = document.querySelectorAll(".experiences");
    var work_experience_list = [];
    for (var i = 0; i < work_experience.length; i++) {
        var element = work_experience[i];
        var workplace = work_experience[i].querySelector(".experience_workplace");
        var from = work_experience[i].querySelector(".experience_year_from");
        var to = work_experience[i].querySelector(".experience_year_to");
        var position = work_experience[i].querySelector(".experience_position");
        var object = {
            workplace: workplace.value,
            from: from.value,
            to: to.value,
            position: position.value
        };
        work_experience_list.push(object);
    }
    var education = document.querySelectorAll(".education");
    var education_list = [];
    for (var i = 0; i < education.length; i++) {
        var element = education[i];
        var level = element.querySelector(".level");
        var field = element.querySelector(".field");
        var grade = element.querySelector(".grade");
        var institution = element.querySelector(".institution");
        var year = element.querySelector(".year");
        var object = {
            level: level === null || level === void 0 ? void 0 : level.innerHTML,
            field: field === null || field === void 0 ? void 0 : field.value,
            grade: grade === null || grade === void 0 ? void 0 : grade.value,
            institution: institution === null || institution === void 0 ? void 0 : institution.value,
            year: year === null || year === void 0 ? void 0 : year.value,
        };
        education_list.push(object);
        console.log(education_list);
        console.log(education_list.length);
    }
    if (email_value && person_name_value && phone_number_value) {
        var HTML = "\n        <br><br>\n    <div class=\"resume\">\n        <br><br><br>\n        <section class=\"name_and_pic_container\">\n        <div class=\"name_and_pic\">\n        <div>\n        <!-- <img class=\"profile_pic\" src=\"Artboard 1 Mockup (1).jpg\" alt=\"\"> -->\n                </div>\n                <div class=\"name_div\">\n                    <h1>".concat(person_name_value, "</h1>\n                </div>\n            </div>\n        </section>\n        <section class=\"resume_info\">\n            <span class=\"personal_info_and_skills\">\n            <div class=\"profile_pic_div\">\n                    <div class=\"image_pic\">").concat(image_profile_pic === null || image_profile_pic === void 0 ? void 0 : image_profile_pic.innerHTML, "</div><br><br><br><br>\n                </div><br><br><br>\n                <h2>Personal Information</h2><br>\n                <div class=\"heading\">Email</div><div> ").concat(email_value, "</div><br>\n                <div class=\"heading\">Phone number </div><div> ").concat(phone_number_value, "</div>\n                <br><br>\n                <h2>Skills</h2><br>\n                ").concat(skill_list.map(function (e, i) {
            if (e !== ",") {
                return "<div> ".concat(e, " </div>");
            }
        }).join(''), "\n            </span>\n            <span class=\"education_and_experience\">\n            <h2>Education</h2><br>\n                <div class=\"education_info\">\n                ").concat(education_list.map(function (e, i) {
            if (i !== 0) {
                return "\n                                <div class=\"".concat(education_list[i]["level"], "_info\">\n                                    <strong>").concat(education_list[i]["level"], "</strong>\n                                    <div>Field: ").concat(education_list[i]["field"], "</div>\n                                    <div>Grade: ").concat(education_list[i]["grade"], "</div>\n                                    <div>Institution: ").concat(education_list[i]["institution"], "</div>\n                                    <div>Year: ").concat(education_list[i]["year"], "</div>\n                                </div>\n                                ");
            }
        }).join(""), "\n                    \n                </div>\n                <br>\n                <h2>\n                    Work Experience\n                </h2><br>\n                <div class=\"work_experiences\">\n                ").concat(work_experience_list.map(function (e, i) {
            return "\n                    <div class=\"work_experience_info\">\n                        <div class=\"work_place\"><strong>".concat(work_experience_list[i]["workplace"], "</strong></div>\n                        <div>From: ").concat(work_experience_list[i]["from"], "</div>\n                        <div>To: ").concat(work_experience_list[i]["to"], "</div>\n                        <div>Position: ").concat(work_experience_list[i]["position"], "</div>\n                    </div>    \n                    ");
        }).join(""), "\n                    \n                </div>\n            </span>\n        </section>\n    </div>\n    ");
        localStorage.setItem("HTML", HTML);
        localStorage.setItem("Image", JSON.stringify(image_profile_pic));
        generated_resume.innerHTML = HTML;
        var image_pic = document.querySelector(".image_pic");
        image_pic.innerHTML = "".concat(image_profile_pic === null || image_profile_pic === void 0 ? void 0 : image_profile_pic.innerHTML);
        window.location.href = "resume.html";
    }
});
