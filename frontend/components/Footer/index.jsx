import {
  SectionWrapper,
  InfoContent,
  InfoHeading,
  InfoItem,
  InfoList,
  InfoTitle,
  StyledFooter,
  FormHeading,
  FormLead,
  FormWrapper,
  FormInput,
  FormTextarea,
  InfoLink,
  FormControls,
  UploadButton,
  SubmitMessage,
  UploadedImg,
  RemoveImgBtn,
  UploadWrapper,
  Inner,
} from "./styles";
import { MainHeading } from "../";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { Button } from "../";
import { useState } from "react";
import StrapiImage from "../StrapiImage";

const Footer = ({ data }) => {
  const { footerForm, footerInfo, footerHeading, companyName } = data;
  const [submitState, setSubmitState] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [img, setImg] = useState(null);
  const isDisabled = submitState?.status === "ok";

  const {
    heading,
    lead,
    name,
    email,
    phone,
    message,
    button,
    downloadIcon,
    submitMessage,
    errorMessage,
  } = footerForm;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    resetField,
  } = useForm();

  const submitData = async (asd, image) => {
    setIsSubmitting(true);
    const data = { ...asd, image: image ? image : null };
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      const data = await response.json();
      setSubmitState({
        status: data.status,
        message: data.status === "ok" ? submitMessage : errorMessage,
      });
    } catch (err) {
      setSubmitState({
        status: "err",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (data) => {
    if (isDisabled || isSubmitting) return;
    const file = data.image && data.image[0] ? data.image[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        submitData(data, reader.result);
      };
    } else {
      submitData(data);
    }
  };

  const prepareLink = (info) => {
    const linkPrefix =
      info.type === "phone" ? "tel:" : info.type === "email" ? "mailto:" : "";
    const isTarget =
      info.link && info.type !== "phone" && info.type !== "email";

    return {
      href: info.link ? `${linkPrefix}${info.link}` : undefined,
      target: isTarget ? "_blank" : undefined,
      rel: isTarget ? "noreferrer" : undefined,
    };
  };

  const onImageChange = (e) => {
    const [file] = e.target.files;

    if (file) {
      if (file.size > 2000000) {
        setError("image", { type: "custom", message: "custom message" });
        setImg(null);
      } else {
        clearErrors("image");
        setImg(URL.createObjectURL(file));
      }
    } else {
      resetField("image");
      setImg(null);
    }
  };

  return (
    <StyledFooter id="contact">
      <Inner width={1200}>
        <MainHeading color="secondary" footer>
          {footerHeading}
        </MainHeading>
        <SectionWrapper content="info">
          <InfoHeading>{companyName}</InfoHeading>
          <InfoList>
            {footerInfo.map((info) => (
              <InfoItem key={info.id} isBreak={info.break}>
                <InfoLink {...prepareLink(info)}>
                  {info.title && <InfoTitle>{info.title}:</InfoTitle>}
                  <InfoContent>{info.content}</InfoContent>
                  {info.contentSecond && (
                    <InfoContent isSecond>{info.contentSecond}</InfoContent>
                  )}
                </InfoLink>
              </InfoItem>
            ))}
          </InfoList>
        </SectionWrapper>
        <SectionWrapper content="form">
          <FormHeading>{heading}</FormHeading>
          <FormLead>{lead}</FormLead>
          <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={isDisabled}>
            <FormInput
              error={errors.name}
              {...register("name", { required: true, maxLength: 80 })}
              placeholder={name}
              disabled={isDisabled}
            />
            <FormInput
              error={errors.email}
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^([a-z0-9_\.\+-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder={email}
              disabled={isDisabled}
            />
            <FormInput
              error={errors.phone}
              {...register("phone", {
                pattern: {
                  value: /\+?([\d|\(][\h|\(\d{3}\)|\.|\-|\d]{4,}\d)/,
                  message: "Please enter a valid phone number",
                },
              })}
              placeholder={phone}
              disabled={isDisabled}
            />
            <FormTextarea
              {...register("message")}
              placeholder={message}
              disabled={isDisabled}
            ></FormTextarea>
            <FormControls>
              <Button isSubmitting={isSubmitting} disabled={isDisabled}>
                {button}
              </Button>
              <UploadWrapper>
                <UploadButton disabled={isDisabled}>
                  <input
                    type="file"
                    {...register("image", {
                      onChange: (e) => onImageChange(e),
                    })}
                    accept=".jpg, .png, .jpeg"
                    disabled={isDisabled}
                  />
                  {img ? (
                    <UploadedImg>
                      <Image
                        src={img}
                        width={40}
                        height={40}
                        alt=""
                        objectFit="cover"
                      />
                    </UploadedImg>
                  ) : (
                    <StrapiImage
                      src={downloadIcon}
                      width={35}
                      height={35}
                      objectFit="contain"
                    />
                  )}
                  {errors.image && (
                    <SubmitMessage error img>
                      Max 2MB
                    </SubmitMessage>
                  )}
                </UploadButton>
                {img && (
                  <RemoveImgBtn
                    type="button"
                    onClick={(e) => {
                      resetField("image");
                      setImg(null);
                    }}
                    disabled={isDisabled}
                  >
                    <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      alt=""
                      objectFit="contain"
                    />
                  </RemoveImgBtn>
                )}
              </UploadWrapper>
            </FormControls>
            {submitState?.status && (
              <SubmitMessage error={submitState.status === "err"}>
                {submitState.message}
              </SubmitMessage>
            )}
          </FormWrapper>
        </SectionWrapper>
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
