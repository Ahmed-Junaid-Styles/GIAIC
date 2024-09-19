const image_profile_pic = document.getElementById("img-preview")

let skills_list = document.querySelector(".skills_inps") as HTMLDivElement
let add_skill = document.querySelector(".add_more_skill") as HTMLButtonElement
let remove_skill = document.querySelector(".remove_more_skill") as HTMLButtonElement

add_skill?.addEventListener('click', () => {
    skills_list.innerHTML += `<input class="skill_inp skill_inp_${skills_list.childElementCount + 1}" type="text" placeholder="Add skill">`
})

remove_skill?.addEventListener('click', () => {
    let remove_skill_child = document.querySelector(`.skill_inp_${skills_list.childElementCount}`) as HTMLTableRowElement
    if (skills_list.childElementCount > 1) {
        skills_list?.removeChild(remove_skill_child)
    }
})


let education_table = document.querySelector(".education_table") as HTMLTableElement
let education_list = document.querySelector(".education_inps") as HTMLDivElement
let add_education = document.querySelector(".add_more_education") as HTMLButtonElement
let remove_education = document.querySelector(".remove_more_education") as HTMLButtonElement

let education_info_list: string[] = [

    `<tr class="intermediate education_2 education">
                    <td class="level">Intermediate: </td>
                    <td><input class="intermediate_field field" type="text"></td>
                    <td><input class="intermediate_grade grade" type="text"></td>
                    <td><input class="intermediate_institution institution" type="text"></td>
                    <td><input class="intermediate_year year" type="text"></td>
                </tr>`,
    `<tr class="graduation education_3 education">
                    <td class="level">Graduation: </td>
                    <td><input class="graduation_field field" type="text"></td>
                    <td><input class="graduation_grade grade" type="text"></td>
                    <td><input class="graduation_institution institution" type="text"></td>
                    <td><input class="graduation_year year" type="text"></td>
                </tr>`,
    `<tr class="masters education_4 education">
                    <td class="level">Masters: </td>
                    <td><input class="masters_field field" type="text"></td>
                    <td><input class="masters_grade grade" type="text"></td>
                    <td><input class="masters_institution institution" type="text"></td>
                    <td><input class="masters_year year" type="text"></td>
                </tr>`
]

add_education?.addEventListener('click', () => {
    if (education_table.childElementCount && education_table.childElementCount < 4) {
        education_table.innerHTML += education_info_list[education_table.childElementCount - 1]
    }
})

remove_education?.addEventListener('click', () => {
    if (education_table.childElementCount > 1) {
        education_table?.removeChild(education_table.lastElementChild as HTMLTableRowElement)
    }
})


let expirence_table = document.querySelector('.experience_table') as HTMLTableElement
let add_more_experience = document.querySelector(".add_more_experience") as HTMLButtonElement
let remove_more_experience = document.querySelector(".remove_more_experience") as HTMLButtonElement

add_more_experience?.addEventListener('click', () => {
    expirence_table.innerHTML += `<tr class="experience_${expirence_table.childElementCount} experiences">
                    <td><input class="experience_workplace" type="text"></td>
                    <td><input class="experience_year_from" type="text"></td>
                    <td><input class="experience_year_to" type="text"></td>
                    <td><input class="experience_position" type="text"></td>
                </tr>`
})

remove_more_experience?.addEventListener('click', () => {
    if (expirence_table.childElementCount > 1) {
        expirence_table.removeChild(expirence_table.lastElementChild as HTMLTableRowElement)
    }
})


const chooseFile = document.getElementById("choose-file") as HTMLInputElement;
const imgPreview = document.getElementById("img-preview") as HTMLDivElement;


chooseFile.addEventListener("change", function () {
    getImgData();
});

function getImgData() {
    const files: any = chooseFile.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = `<img src="${this.result}" class="profile_pic" />`

        });
    }
}

let generated_resume = document.querySelector(".generated_resume") as HTMLDivElement
let generate_btn = document.querySelector(".generate") as HTMLButtonElement

generate_btn.addEventListener("click", () => {
    let email = document.querySelector(".email") as HTMLInputElement
    let email_value = email.value
    let person_name = document.querySelector(".name") as HTMLInputElement
    let person_name_value = person_name.value
    let phone_number = document.querySelector(".phone_no") as HTMLInputElement
    let phone_number_value = phone_number.value

    let skill_inputs = document.querySelectorAll<HTMLInputElement>(".skill_inp")
    let skill_list: string[] = []
    skill_inputs.forEach((e) => {
        skill_list.push(e.value)
    })

    let work_experience = document.querySelectorAll<HTMLDivElement>(".experiences")
    let work_experience_list: object[] = []

    for (let i = 0; i < work_experience.length; i++) {
        const element = work_experience[i];
        let workplace = work_experience[i].querySelector(".experience_workplace") as HTMLInputElement
        let from = work_experience[i].querySelector(".experience_year_from") as HTMLInputElement
        let to = work_experience[i].querySelector(".experience_year_to") as HTMLInputElement
        let position = work_experience[i].querySelector(".experience_position") as HTMLInputElement
        let object: { workplace: String, from: String, to: String, position: String } = {
            workplace: workplace.value,
            from: from.value,
            to: to.value,
            position: position.value
        }
        work_experience_list.push(object)

    }

    let education = document.querySelectorAll<HTMLDivElement>(".education")
    let education_list: object[] = []

    for (let i = 0; i < education.length; i++) {
        const element = education[i];
        let level = element.querySelector(".level") as HTMLDivElement
        let field = element.querySelector(".field") as HTMLInputElement
        let grade = element.querySelector(".grade") as HTMLInputElement
        let institution = element.querySelector(".institution") as HTMLInputElement
        let year = element.querySelector(".year") as HTMLInputElement
        let object: { level: String, field: String, grade: String, institution: String, year: string } = {
            level: level?.innerHTML,
            field: field?.value,
            grade: grade?.value,
            institution: institution?.value,
            year: year?.value,
        }
        education_list.push(object)
    }

    let Image = document.querySelector("#choose-file") as HTMLInputElement
    let isImage = Image.value

    if (email_value && person_name_value && phone_number_value && isImage) {

        let HTML =
            `
        <br><br>
    <div class="resume">
        <br><br><br>
        <section class="name_and_pic_container">
        <div class="name_and_pic">
        <div>
        <!-- <img class="profile_pic" src="Artboard 1 Mockup (1).jpg" alt=""> -->
                </div>
                <div class="name_div">
                    <h1 class="user_input_name">${person_name_value}</h1>
                </div>
            </div>
        </section>
        <section class="resume_info">
            <span class="personal_info_and_skills">
            <div class="profile_pic_div">
                    <div class="image_pic">${image_profile_pic?.innerHTML}</div><br><br><br><br>
                </div><br><br><br>
                <h2>Personal Information</h2><br>
                <div class="heading">Email</div><div class="email_value user_input_email"> ${email_value}</div><br>
                <div class="heading">Phone number </div><div class="user_input_number"> ${phone_number_value}</div>
                <br><br>
                <h2>Skills</h2><br>
                ${skill_list.map((e, i) => {
                if (e !== ",") {
                    return `<div class="user_input_skills skill_no_${i+1}"> ${e} </div>`
                }

            }).join('')}
            </span>
            <span class="education_and_experience">
            <h2>Education</h2>
                <div class="education_info">
                ${education_list.map((e, i) => {
                if (i !== 0) {
                    return `
                                <div class="${education_list[i]["level"]}_info">
                                    <strong>${education_list[i]["level"]}</strong>
                                    <div>Field: ${education_list[i]["field"]}</div>
                                    <div>Grade: ${education_list[i]["grade"]}</div>
                                    <div>Institution: ${education_list[i]["institution"]}</div>
                                    <div>Year: ${education_list[i]["year"]}</div>
                                </div>
                                `
                }
            }).join("")
            }
                    
                </div>
                <br>
                <h2>
                    Work Experience
                </h2>
                <div class="work_experiences">
                ${work_experience_list.map((e, i) => {
                return `
                    <div class="work_experience_info">
                        <div class="work_place"><strong>${work_experience_list[i]["workplace"]}</strong></div>
                        <div>From: ${work_experience_list[i]["from"]}</div>
                        <div>To: ${work_experience_list[i]["to"]}</div>
                        <div>Position: ${work_experience_list[i]["position"]}</div>
                    </div>    
                    `
            }).join("")
            }
                    
                </div>
            </span>
        </section>
    </div>
    `
        localStorage.setItem("HTML", HTML)
        localStorage.setItem("Image", JSON.stringify(image_profile_pic))
        generated_resume.innerHTML = HTML
        let image_pic = document.querySelector(".image_pic") as HTMLDivElement
        image_pic.innerHTML = `${image_profile_pic?.innerHTML}`
        window.location.href = "resume.html"
    }
})