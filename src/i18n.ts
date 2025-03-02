import { createI18n } from 'vue-i18n'

//Setup land
const messages = {
  en: {
    personal_name: "Thang Thanh Phan",
    personal_title: "Hi, I'am a Software Engineer",
    header_welcome: "Welcome to my portfolio",

    menu_title_home: "Home",
    menu_title_about: "About",
    menu_title_skill: "Skill",
    menu_title_project: "Project",
    menu_title_contact: "Contact",

    button_view_project: "View projects"
  },
  vi: {
    personal_name: "Phan Thanh Thắng",
    personal_title: "Xin chào, mình là một Kỹ sư Phần mềm",
    header_welcome: "Chào mừng đến với portfolio của mình",

    menu_title_home: "Trang chủ",
    menu_title_about: "Giới thiệu",
    menu_title_skill: "Kỹ năng",
    menu_title_project: "Dự án",
    menu_title_contact: "Liên hệ",

    button_view_project: "Xem các dự án"
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'vi',
  messages
})


export default i18n
