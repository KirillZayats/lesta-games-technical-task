import { ContainerPageStyle } from "../styles/AppStyled";
import {
  IconPhone,
  IconEmail,
  IconTelegram,
  IconLinkedin,
  IconGithub,
  TitleContainerSocialStyle,
  ContainerInfoStyle,
  TextLinkStyle,
  LinkStyle,
  ElementListStyle,
  ListLinksStyle,
  TextStyle,
  TitleStyle,
  SocialLinksStyle,
  ContactsStyle,
} from "../styles/pages/ContactsStyled";
import {
  LINK_EMAIL,
  LINK_GITHUB,
  LINK_LINKEDIN,
  LINK_PHONE,
  LINK_TELEGRAM,
} from "../additionally/constants";

const Contacts = () => {
  return (
    <ContainerPageStyle>
      <ContactsStyle>
        <TitleStyle>Contact Information</TitleStyle>
        <ContainerInfoStyle>
          <TextStyle>
            Hi! My name's Kirill. If you have any questions, you can write to
            me. I will be very glad to each of your questions :)
          </TextStyle>
          <SocialLinksStyle>
            <TitleContainerSocialStyle>Write here</TitleContainerSocialStyle>
            <ListLinksStyle>
              <ElementListStyle>
                <LinkStyle href={LINK_PHONE}>
                  <IconPhone />
                  <TextLinkStyle>+375295304989</TextLinkStyle>
                </LinkStyle>
              </ElementListStyle>
              <ElementListStyle>
                <LinkStyle href={LINK_EMAIL}>
                  <IconEmail />
                  <TextLinkStyle>kirill.zayats.99@mail.ru</TextLinkStyle>
                </LinkStyle>
              </ElementListStyle>
              <ElementListStyle>
                <LinkStyle href={LINK_LINKEDIN}>
                  <IconLinkedin />
                  <TextLinkStyle>linkedin</TextLinkStyle>
                </LinkStyle>
              </ElementListStyle>
              <ElementListStyle>
                <LinkStyle href={LINK_TELEGRAM}>
                  <IconTelegram />
                  <TextLinkStyle>@zayatsKirill</TextLinkStyle>
                </LinkStyle>
              </ElementListStyle>
              <ElementListStyle>
                <LinkStyle href={LINK_GITHUB}>
                  <IconGithub />
                  <TextLinkStyle>github</TextLinkStyle>
                </LinkStyle>
              </ElementListStyle>
            </ListLinksStyle>
          </SocialLinksStyle>
        </ContainerInfoStyle>
      </ContactsStyle>
    </ContainerPageStyle>
  );
};

export default Contacts;
