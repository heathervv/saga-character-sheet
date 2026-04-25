import Character from "../components/sections/Character"
import SocialSkills from "../components/sections/SocialSkills"
import PhysicalSkills from "../components/sections/PhysicalSkills"
import MagicSkills from "../components/sections/MagicSkills"
import IconMagic from "../assets/images/icon-magic"
import IconPhysical from "../assets/images/icon-physical"
import IconSocial from "../assets/images/icon-social"
import IconCharacter from "../assets/images/icon-character"

export enum SECTIONS {
    CHARACTER = 'character',
    SOCIAL_SKILLS = 'social_skills',
    PHYSICAL_SKILLS = 'physical_skills',
    MAGIC_SKILLS = 'magic_skills',
}

export const section_titles = {
    [SECTIONS.CHARACTER]: "Character",
    [SECTIONS.SOCIAL_SKILLS]: "Social Skills",
    [SECTIONS.PHYSICAL_SKILLS]: "Physical Skills",
    [SECTIONS.MAGIC_SKILLS]: "Magic Skills",
}

export const section_icons = {
    [SECTIONS.CHARACTER]: IconCharacter,
    [SECTIONS.SOCIAL_SKILLS]: IconSocial,
    [SECTIONS.PHYSICAL_SKILLS]: IconPhysical,
    [SECTIONS.MAGIC_SKILLS]: IconMagic,
}

export const section_components = {
    [SECTIONS.CHARACTER]: Character,
    [SECTIONS.SOCIAL_SKILLS]: SocialSkills,
    [SECTIONS.PHYSICAL_SKILLS]: PhysicalSkills,
    [SECTIONS.MAGIC_SKILLS]: MagicSkills,
}