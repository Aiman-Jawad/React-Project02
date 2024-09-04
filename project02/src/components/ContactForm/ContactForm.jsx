import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdMail } from "react-icons/md";

function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA CHAT SUPPORT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FiPhone fontSize="24px" />} />
        </div>
        <Button
          isEmail_Btn={true}
          text="VIA EMAIL FORM"
          icon={<MdMail fontSize="24px" />}
        />

        <form action="">
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows="10" />
          </div>

          <div className={styles.submitBtn}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="./images/Service 24_7-pana 1.png" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
