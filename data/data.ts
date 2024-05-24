const currentYear = new Date().getFullYear();
const data = {
    sitename: "OG Coder",
    sitetagline: "Let us see your code! ✨ 🔥",
    siteurl: "https://github.com/leny62",
    sitelogo: "",
    title: "Stay tuned!",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅 🚀.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://github.com/leny62">OG Coder</a>`,
    socialIconsHeading: "Follow For More 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/lenyIhirwe/",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/leny-pascal-ihirwe/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
