// src/components/Contact/Contact.tsx

import styles from "@/components/Contact/Contact.module.css";
import designPNG from "@/static/img/logo-2.png";
import contactJPG from "@/static/img/contact.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faEnvelope,
  faMobilePhone,
  faRoad,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import { variants } from "@/components/Animate/Animate.variants";
import { useRef } from "react";
import CallToAction from "../Button/CallToAction";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  return (
    <article id="contact" ref={ref} className={styles.component}>
      <div className={styles.box}>
        <div className={styles.body}>
          <div className={styles.image}>
            <Image
              src={contactJPG}
              alt="Salon"
              width={1024}
              height={768}
              priority
            />
          </div>
        </div>

        <div className={styles.head}>
          <div className={styles.image}>
            <Image
              src={designPNG}
              alt="Design 2"
              width={1280}
              height={960}
              priority
            />
          </div>

          <div ref={ref4} className="relative w-full">
            <motion.div
              initial="slideInRightInitial"
              animate={isInView4 ? "slideInRightEarly" : "slideInRightInitial"}
              variants={variants}
            >
              <h2 className={styles.title}>Comment nous contacter ?</h2>

              <p className={styles.text}>
                Les défis de l&apos;aménagement intérieur et des rénovations
                vous ont poussé à trouver une expertise fiable.
              </p>

              <p className={styles.text}>
                Sans une intervention adaptée, le cumul des problèmes peut nuire
                à l&apos;esthétique et au fonctionnement de votre environnement.
              </p>

              <p className={styles.text}>
                Nous vous remercions de nous avoir choisis pour transformer ces
                défis en solutions créatives et performantes, en harmonie avec
                vos attentes décoratives.
              </p>
            </motion.div>
          </div>

          <div ref={ref2} className={styles.list}>
            <motion.div
              initial="slideInDownInitial"
              animate={isInView2 ? "slideInDownEarly" : "slideInDownInitial"}
              variants={variants}
            >
              <ul>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faUserCheck} />
                  </div>
                  Bondy Builder
                </li>

                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  bondybuilder93@gmail.com
                </li>

                {/* <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMobilePhone} />
                  </div>
                  01 23 45 67 89
                </li> */}

                {/* <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faRoad} />
                  </div>
                  123, rue du Paradis
                </li> */}

                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCity} />
                  </div>
                  93140, Bondy
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="w-full inline-flex">
            <CallToAction />
          </div>
        </div>
      </div>
    </article>
  );
}
