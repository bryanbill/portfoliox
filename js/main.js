const openLink = (link) => {
    window.open("https://github.com/bryanbill/" + link, '_blank');
}
const isDark = false;
const changeTheme = () => {
    if (isDark) {
        document.documentElement.classList.remove("bg-dark");
        document.documentElement.classList.add("bg-light");
        isDark = false;
    }
    else {
        document.documentElement.classList.remove("bg-light");
        document.documentElement.classList.add("bg-dark");
        isDark = true;
    }
    console.log(isDark);
}