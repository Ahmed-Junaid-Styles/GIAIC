let skills_list = document.querySelector(".skills_inps") as HTMLDivElement
let add_skill = document.querySelector(".add_more_skill") as HTMLButtonElement
let remove_skill = document.querySelector(".remove_more_skill") as HTMLButtonElement

// let add_educdocument.querySelector(".remove_more_education")
// document.querySelector(".add_more_education")

add_skill?.addEventListener('click', ()=>{
    skills_list.innerHTML += `<input class="skill_inp skill_inp_${skills_list.childElementCount +1}" type="text" placeholder="Add skill">`
})

remove_skill?.addEventListener('click', ()=>{
    let remove_skill_child = document.querySelector(`.skill_inp_${skills_list.childElementCount}`) as HTMLTableRowElement
    if(skills_list.childElementCount > 1){
        skills_list?.removeChild(remove_skill_child)
    }
})


let education_table = document.querySelector(".education_table") as HTMLTableElement
let education_list = document.querySelector(".education_inps") as HTMLDivElement
let add_education = document.querySelector(".add_more_education") as HTMLButtonElement
let remove_education = document.querySelector(".remove_more_education") as HTMLButtonElement

let education_info_list: string[] = [
    
    `<tr class="intermediate education_2">
                    <td class="center">Intermediate: </td>
                    <td><input class="intermediate_field" type="text"></td>
                    <td><input class="intermediate_grade" type="text"></td>
                    <td><input class="intermediate_institution" type="text"></td>
                    <td><input class="intermediate_year" type="text"></td>
                </tr>`,
    `<tr class="graduation education_3">
                    <td class="center">Graduation: </td>
                    <td><input class="graduation_field" type="text"></td>
                    <td><input class="graduation_grade" type="text"></td>
                    <td><input class="graduation_institution" type="text"></td>
                    <td><input class="graduation_year" type="text"></td>
                </tr>`,
    `<tr class="masters education_4">
                    <td class="center">Masters: </td>
                    <td><input class="masters_field" type="text"></td>
                    <td><input class="masters_grade" type="text"></td>
                    <td><input class="masters_institution" type="text"></td>
                    <td><input class="masters_year" type="text"></td>
                </tr>`
]

add_education?.addEventListener('click', ()=>{
    if(education_table.childElementCount && education_table.childElementCount < 4){
        education_table.innerHTML += education_info_list[education_table.childElementCount - 1]
    }
})

remove_education?.addEventListener('click', ()=>{
    if(education_table.childElementCount > 1){
        education_table?.removeChild(education_table.lastElementChild as HTMLTableRowElement)
    }
})


let experience_HTML = `<tr class="experience_1">
                    <td><input class="experience_workplace" type="text"></td>
                    <td><input class="experience_year_from" type="text"></td>
                    <td><input class="experience_year_to" type="text"></td>
                    <td><input class="experience_position" type="text"></td>
                </tr>`

let expirence_table = document.querySelector('.experience_table') as HTMLTableElement
let add_more_experience = document.querySelector(".add_more_experience") as HTMLButtonElement
let remove_more_experience = document.querySelector(".remove_more_experience") as HTMLButtonElement

add_more_experience?.addEventListener('click', ()=>{
    expirence_table.innerHTML += `<tr class="experience_${expirence_table.childElementCount}">
                    <td><input class="experience_workplace" type="text"></td>
                    <td><input class="experience_year_from" type="text"></td>
                    <td><input class="experience_year_to" type="text"></td>
                    <td><input class="experience_position" type="text"></td>
                </tr>`
})

remove_more_experience?.addEventListener('click', ()=>{
    if(expirence_table.childElementCount > 1){
        expirence_table.removeChild(expirence_table.lastElementChild as HTMLTableRowElement)
    }
})

