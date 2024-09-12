var skills_list = document.querySelector(".skills_inps");
var add_skill = document.querySelector(".add_more_skill");
var remove_skill = document.querySelector(".remove_more_skill");
// let add_educdocument.querySelector(".remove_more_education")
// document.querySelector(".add_more_education")
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
    "<tr class=\"intermediate education_2\">\n                    <td class=\"center\">Intermediate: </td>\n                    <td><input class=\"intermediate_field\" type=\"text\"></td>\n                    <td><input class=\"intermediate_grade\" type=\"text\"></td>\n                    <td><input class=\"intermediate_institution\" type=\"text\"></td>\n                    <td><input class=\"intermediate_year\" type=\"text\"></td>\n                </tr>",
    "<tr class=\"graduation education_3\">\n                    <td class=\"center\">Graduation: </td>\n                    <td><input class=\"graduation_field\" type=\"text\"></td>\n                    <td><input class=\"graduation_grade\" type=\"text\"></td>\n                    <td><input class=\"graduation_institution\" type=\"text\"></td>\n                    <td><input class=\"graduation_year\" type=\"text\"></td>\n                </tr>",
    "<tr class=\"masters education_4\">\n                    <td class=\"center\">Masters: </td>\n                    <td><input class=\"masters_field\" type=\"text\"></td>\n                    <td><input class=\"masters_grade\" type=\"text\"></td>\n                    <td><input class=\"masters_institution\" type=\"text\"></td>\n                    <td><input class=\"masters_year\" type=\"text\"></td>\n                </tr>"
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
var experience_HTML = "<tr class=\"experience_1\">\n                    <td><input class=\"experience_workplace\" type=\"text\"></td>\n                    <td><input class=\"experience_year_from\" type=\"text\"></td>\n                    <td><input class=\"experience_year_to\" type=\"text\"></td>\n                    <td><input class=\"experience_position\" type=\"text\"></td>\n                </tr>";
var expirence_table = document.querySelector('.experience_table');
var add_more_experience = document.querySelector(".add_more_experience");
var remove_more_experience = document.querySelector(".remove_more_experience");
add_more_experience === null || add_more_experience === void 0 ? void 0 : add_more_experience.addEventListener('click', function () {
    expirence_table.innerHTML += "<tr class=\"experience_".concat(expirence_table.childElementCount, "\">\n                    <td><input class=\"experience_workplace\" type=\"text\"></td>\n                    <td><input class=\"experience_year_from\" type=\"text\"></td>\n                    <td><input class=\"experience_year_to\" type=\"text\"></td>\n                    <td><input class=\"experience_position\" type=\"text\"></td>\n                </tr>");
});
remove_more_experience === null || remove_more_experience === void 0 ? void 0 : remove_more_experience.addEventListener('click', function () {
    if (expirence_table.childElementCount > 1) {
        expirence_table.removeChild(expirence_table.lastElementChild);
    }
});
