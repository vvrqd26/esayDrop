export const SociaList = ({ className }: { className?: string }) => {
  const socialList = [
    {
      icon: "icon-telegram",
      text: "Telegram",
      link: "",
    },
    {
      icon: "icon-twitter",
      text: "Tw",
      link: "",
    },
    {
      icon: "icon-discord",
      text: "Discrod",
      link: "",
    },
    {
      icon: "icon-web",
      text: "web",
      link: "",
    },
  ];

  return (
    <>
      {socialList.map((item) => (
        <span className={(className ?? "") + " iconfont " + item.icon}></span>
      ))}
    </>
  );
};
