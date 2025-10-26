import SectionOne from "../components/sections/SectionOne"
import SectionTwo from "../components/sections/SectionTwo"
import SectionThree from "../components/sections/SectionThree"

export enum SECTIONS {
    SECTION_ONE = 'section_one',
    SECTION_TWO = 'section_two',
    SECTION_THREE = 'section_three',
}

export const section_titles = {
    [SECTIONS.SECTION_ONE]: "Section one",
    [SECTIONS.SECTION_TWO]: "Section two",
    [SECTIONS.SECTION_THREE]: "Section three",
}

export const section_components = {
    [SECTIONS.SECTION_ONE]: SectionOne,
    [SECTIONS.SECTION_TWO]: SectionTwo,
    [SECTIONS.SECTION_THREE]: SectionThree,
}