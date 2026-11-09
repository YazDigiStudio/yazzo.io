// Finnish / English switch for a page that exists in both languages.
// "onDark" is for the purple hero, otherwise the pills are grey on white.
import Link from "next/link";
import { Lang, pagePath } from "../content/siteText";

interface LangSwitchProps {
  page: "about" | "team";
  lang: Lang;
  onDark?: boolean;
}

export default function LangSwitch({ page, lang, onDark = false }: LangSwitchProps) {
  const pillClass = (active: boolean) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
      active
        ? onDark
          ? "bg-white text-yazzo-800"
          : "bg-yazzo-600 text-white"
        : onDark
          ? "bg-white/20 text-white hover:bg-white/30"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;

  return (
    <div className="flex justify-center gap-2 mt-6">
      <Link href={pagePath(page, "fi")} className={pillClass(lang === "fi")} hrefLang="fi">
        Suomi
      </Link>
      <Link href={pagePath(page, "en")} className={pillClass(lang === "en")} hrefLang="en">
        English
      </Link>
    </div>
  );
}
