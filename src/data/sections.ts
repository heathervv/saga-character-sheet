import Character from "../components/sections/Character"
import SocialSkills from "../components/sections/SocialSkills"
import PhysicalSkills from "../components/sections/PhysicalSkills"
import MagicSkills from "../components/sections/MagicSkills"
import WarriorSkills from "../components/sections/WarriorSkills"
import HigherPower from "../components/sections/HigherPower"
import IconMagic from "../assets/images/icon-magic"
import IconPhysical from "../assets/images/icon-physical"
import IconSocial from "../assets/images/icon-social"
import IconCharacter from "../assets/images/icon-character"
import IconMeditate from "../assets/images/icon-meditate"
import IconMuscle from "../assets/images/icon-muscle"

export enum SECTIONS {
    CHARACTER = 'character',
    SOCIAL_SKILLS = 'social_skills',
    PHYSICAL_SKILLS = 'physical_skills',
    MAGIC_SKILLS = 'magic_skills',
    WARRIOR_SKILLS = 'warrior_skills',
    HIGHER_POWER = 'higher_power',
}

export const section_titles = {
    [SECTIONS.CHARACTER]: "Character / Party",
    [SECTIONS.SOCIAL_SKILLS]: "Social Skills",
    [SECTIONS.PHYSICAL_SKILLS]: "Physical Skills",
    [SECTIONS.MAGIC_SKILLS]: "Magic Skills",
    [SECTIONS.WARRIOR_SKILLS]: "Warrior Skills",
    [SECTIONS.HIGHER_POWER]: "Higher Power",
}

export const section_icons = {
    [SECTIONS.CHARACTER]: IconCharacter,
    [SECTIONS.SOCIAL_SKILLS]: IconSocial,
    [SECTIONS.PHYSICAL_SKILLS]: IconPhysical,
    [SECTIONS.MAGIC_SKILLS]: IconMagic,
    [SECTIONS.WARRIOR_SKILLS]: IconMuscle,
    [SECTIONS.HIGHER_POWER]: IconMeditate,
}

export const section_components = {
    [SECTIONS.CHARACTER]: Character,
    [SECTIONS.SOCIAL_SKILLS]: SocialSkills,
    [SECTIONS.PHYSICAL_SKILLS]: PhysicalSkills,
    [SECTIONS.MAGIC_SKILLS]: MagicSkills,
    [SECTIONS.WARRIOR_SKILLS]: WarriorSkills,
    [SECTIONS.HIGHER_POWER]: HigherPower,
}