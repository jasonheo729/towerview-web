import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";

export const dict = {
    en: {
        dashboard: 'Dashboard',
        video: 'Video',
        map: 'Map',
        list: 'List',
        notifications: 'Notifications',
        settings: 'Settings',
        account_settings: 'Account settings',
        change_password: 'Change Password',
        general_settings: 'General settings',
        advanced_settings: 'Advanced settings',
        system: 'System',
        user: 'User',
        more: 'More',
        active_sites: 'Active Sites',
        inactive_sites: 'Inactive Sites',
        active_users: 'Registered Users',
        total_users: 'Registered Users',
        sensor: 'Sensor',
        enabled: 'Enabled',
        status: 'Status',
        sensor_name: 'Site Name',
        sensor_id: 'Site Id',
        wind: 'Wind',
        temperature: 'Temperature',
        humidity: 'Humidity',
        pressure: 'Pressure',
        accel: 'Accel',
    },
    ko: {
        dashboard: '대시보드',
        video: '비디오',
        map: '지도',
        list: '목록',
        notifications: '알림',
        settings: '설정',
        account: '계정',
        account_settings: '계정 설정',
        change_password: '비밀번호 변경',
        general: '일반',
        general_settings: '일반 설정',
        advanced: '고급',
        advanced_settings: '고급 설정',
        system: '시스템',
        system_settings: '시스템 설정',
        user: '사용자',
        more: '더 보기',
        active_sites: '활성 사이트',
        inactive_sites: '비활성 사이트',
        active_users: '활성 사용자',
        total_users: '총 사용자',
        sensor: '센서',
        enabled: '활성',
        status: '상태',
        site_name: '사이트명',
        sensor_id: '사이트 아이디',
        wind: '풍속',
        temperature: '온도',
        humidity: '습도',
        pressure: '기압',
        accel: '기울기',
    },
};

I18n.putVocabulariesForLanguage("ko", {
    [Translations.BACK_TO_SIGN_IN]: "로그인 페이지",
    [Translations.CHANGE_PASSWORD_ACTION]: "변경",
    [Translations.CHANGE_PASSWORD]: "비밀번호 변경",
    [Translations.CODE_LABEL]: "인증코드",
    [Translations.CODE_PLACEHOLDER]: "인증코드 입력",
    [Translations.CONFIRM_SIGN_UP_CODE_LABEL]: "인증코드",
    [Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: "코드 입력",
    [Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: "등록 확인",
    [Translations.CONFIRM_SIGN_UP_LOST_CODE]: "Lost your code?",
    [Translations.CONFIRM_SIGN_UP_RESEND_CODE]: "인증코드 재전송",
    [Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT]: "확인",
    [Translations.CONFIRM_SMS_CODE]: "확인 SMS Code",
    [Translations.CONFIRM_TOTP_CODE]: "확인 TOTP Code",
    [Translations.CONFIRM]: "확인",
    [Translations.CREATE_ACCOUNT_TEXT]: "사용자 등록",
    [Translations.EMAIL_LABEL]: "이메일 *",
    [Translations.EMAIL_PLACEHOLDER]: "이메일",
    [Translations.FORGOT_PASSWORD_TEXT]: "비밀번호 찾기",
    [Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE]: "Less than two MFA types available",
    [Translations.NEW_PASSWORD_LABEL]: "새 비밀번호",
    [Translations.NEW_PASSWORD_PLACEHOLDER]: "새 비밀번호 입력",
    [Translations.NO_ACCOUNT_TEXT]: "신규 사용자",
    [Translations.USERNAME_REMOVE_WHITESPACE]: "공백 문자를 포함할 수 없습니다",
    [Translations.PASSWORD_REMOVE_WHITESPACE]: "공백 문자를 포함할 수 없습니다",
    [Translations.PASSWORD_LABEL]: "비밀번호 *",
    [Translations.PASSWORD_PLACEHOLDER]: "비밀번호",
    [Translations.PHONE_LABEL]: "Phone Number *",
    [Translations.PHONE_PLACEHOLDER]: "(555) 555-1212",
    [Translations.QR_CODE_ALT]: "qrcode",
    [Translations.RESET_PASSWORD_TEXT]: "비밀번호 초기화",
    [Translations.RESET_YOUR_PASSWORD]: "비밀번호 초기화",
    [Translations.SELECT_MFA_TYPE_HEADER_TEXT]: "Select MFA Type",
    [Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT]: "Verify",
    [Translations.SEND_CODE]: "코드 보내기",
    [Translations.SUBMIT]: "확인",
    [Translations.SETUP_TOTP_REQUIRED]: "TOTP needs to be configured",
    [Translations.SIGN_IN_ACTION]: "로그인",
    [Translations.SIGN_IN_HEADER_TEXT]: "로그인",
    [Translations.SIGN_IN_TEXT]: "로그인",
    [Translations.SIGN_IN_WITH_AMAZON]: "Sign in with Amazon",
    [Translations.SIGN_IN_WITH_AUTH0]: "Sign in with Auth0",
    [Translations.SIGN_IN_WITH_AWS]: "Sign in with AWS",
    [Translations.SIGN_IN_WITH_FACEBOOK]: "Sign in with Facebook",
    [Translations.SIGN_IN_WITH_GOOGLE]: "Sign in with Google",
    [Translations.SIGN_OUT]: "로그아웃",
    [Translations.SIGN_UP_EMAIL_PLACEHOLDER]: "이메일",
    [Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: "신규 사용자",
    [Translations.SIGN_UP_HEADER_TEXT]: "타워뷰 사용자 등록",
    [Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: "비밀번호",
    [Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: "등록",
    [Translations.SIGN_UP_USERNAME_PLACEHOLDER]: "이메일",
    [Translations.SUCCESS_MFA_TYPE]: "Success! Your MFA Type is now:",
    [Translations.TOTP_HEADER_TEXT]: "Scan then enter verification code",
    [Translations.TOTP_LABEL]: "Enter Security Code:",
    [Translations.TOTP_ISSUER]: "AWSCognito",
    [Translations.TOTP_SETUP_FAILURE]: "TOTP Setup has failed",
    [Translations.TOTP_SUBMIT_BUTTON_TEXT]: "Verify Security Token",
    [Translations.TOTP_SUCCESS_MESSAGE]: "Setup TOTP successfully!",
    [Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME]: "Failed! Unable to configure MFA at this time",
    [Translations.USERNAME_LABEL]: "이메일 *",
    [Translations.USERNAME_PLACEHOLDER]: "email@kisco.or.kr",
    [Translations.VERIFY_CONTACT_EMAIL_LABEL]: "이메일",
    [Translations.VERIFY_CONTACT_HEADER_TEXT]: "Account recovery requires verified contact information",
    [Translations.VERIFY_CONTACT_PHONE_LABEL]: "Phone Number",
    [Translations.VERIFY_CONTACT_SUBMIT_LABEL]: "Submit",
    [Translations.VERIFY_CONTACT_VERIFY_LABEL]: "Verify",
    [Translations.ADDRESS_LABEL]: "Address",
    [Translations.ADDRESS_PLACEHOLDER]: "Enter your address",
    [Translations.NICKNAME_LABEL]: "Nickname",
    [Translations.NICKNAME_PLACEHOLDER]: "Enter your nickname",
    [Translations.BIRTHDATE_LABEL]: "Birthday",
    [Translations.BIRTHDATE_PLACEHOLDER]: "Enter your birthday",
    [Translations.PICTURE_LABEL]: "Picture URL",
    [Translations.PICTURE_PLACEHOLDER]: "Enter your picture URL",
    [Translations.FAMILY_NAME_LABEL]: "Family Name",
    [Translations.FAMILY_NAME_PLACEHOLDER]: "Enter your family name",
    [Translations.PREFERRED_USERNAME_LABEL]: "Preferred Username",
    [Translations.PREFERRED_USERNAME_PLACEHOLDER]: "Enter your preferred username",
    [Translations.GENDER_LABEL]: "Gender",
    [Translations.GENDER_PLACEHOLDER]: "Enter your gender",
    [Translations.PROFILE_LABEL]: "Profile URL",
    [Translations.PROFILE_PLACEHOLDER]: "Enter your profile URL",
    [Translations.GIVEN_NAME_LABEL]: "First Name",
    [Translations.GIVEN_NAME_PLACEHOLDER]: "Enter your first name",
    [Translations.ZONEINFO_LABEL]: "Time zone",
    [Translations.ZONEINFO_PLACEHOLDER]: "Enter your time zone",
    [Translations.LOCALE_LABEL]: "Locale",
    [Translations.LOCALE_PLACEHOLDER]: "Enter your locale",
    [Translations.UPDATED_AT_LABEL]: "Updated At",
    [Translations.UPDATED_AT_PLACEHOLDER]: "Enter the time the information was last updated",
    [Translations.MIDDLE_NAME_LABEL]: "Middle Name",
    [Translations.MIDDLE_NAME_PLACEHOLDER]: "Enter your middle name",
    [Translations.WEBSITE_LABEL]: "Website",
    [Translations.WEBSITE_PLACEHOLDER]: "Enter your website",
    [Translations.NAME_LABEL]: "Full Name",
    [Translations.NAME_PLACEHOLDER]: "Enter your full name",
    [Translations.PHOTO_PICKER_TITLE]: "Picker Title",
    [Translations.PHOTO_PICKER_HINT]: "Ancillary text or content may occupy this space here",
    [Translations.PHOTO_PICKER_PLACEHOLDER_HINT]: "Placeholder hint",
    [Translations.PHOTO_PICKER_BUTTON_TEXT]: "Button",
    [Translations.IMAGE_PICKER_TITLE]: "Add Profile Photo",
    [Translations.IMAGE_PICKER_HINT]: "Preview the image before upload",
    [Translations.IMAGE_PICKER_PLACEHOLDER_HINT]: "Tap to image select",
    [Translations.IMAGE_PICKER_BUTTON_TEXT]: "Upload",
    [Translations.PICKER_TEXT]: "Pick a file",
    [Translations.TEXT_FALLBACK_CONTENT]: "Fallback Content",
    [Translations.CONFIRM_SIGN_UP_FAILED]: "확인 Sign Up Failed",
    [Translations.SIGN_UP_FAILED]: "Sign Up Failed",
  });