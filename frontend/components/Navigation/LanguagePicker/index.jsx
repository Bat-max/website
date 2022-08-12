import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CircleFlag } from "react-circle-flags";
import {
  LanguagesList,
  StyledLanguagePicker,
  FlagWrapper,
  CurrentFlagWrapper,
} from "./styles";

const LanguagePicker = ({ closeMenu, global }) => {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  const availableLocales = global?.localizations.data;

  const getCountryCode = (lang) => {
    return lang === "cs-CZ" ? "cz" : lang.slice(0, 2);
  };

  const handlePickerState = () => {
    setIsOpened(!isOpened);
  };

  return availableLocales?.length ? (
    <StyledLanguagePicker onClick={handlePickerState}>
      <CurrentFlagWrapper current>
        <CircleFlag countryCode={getCountryCode(global.locale)} />
      </CurrentFlagWrapper>
      <LanguagesList isOpened={isOpened}>
        {availableLocales.map((locale) => {
          const isNextLocalized = router.locales.find(
            (lang) => lang === locale.attributes.locale
          );

          return isNextLocalized ? (
            <li key={locale.id} onClick={closeMenu}>
              <Link
                href={router.pathname.includes("[") ? "/" : router.asPath}
                locale={locale.attributes.locale}
                passHref
              >
                <FlagWrapper>
                  <CircleFlag
                    countryCode={getCountryCode(locale.attributes.locale)}
                  />
                </FlagWrapper>
              </Link>
            </li>
          ) : (
            ""
          );
        })}
      </LanguagesList>
    </StyledLanguagePicker>
  ) : (
    ""
  );
};

export default LanguagePicker;
