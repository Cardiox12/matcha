import GenericPage from "../page/GenericPage";
import Header from "../../components/ui/header/Header";
import styles from "./Profile.module.css";
import Photo from "../../components/ui/photo/Photo";
import IconButton from "../../components/ui/button/IconButton";
import Carousel from "../../components/ui/photo/Carousel";
import Tags from "../../components/ui/tags/Tags";
import Button from "../../components/ui/button/Button";
import Bio from "../../components/ui/bio/Bio";
import { useTheme } from "../../hooks/use-theme";
import maleImg from "../../assets/image/male.jpeg";
import femaleImg from "../../assets/image/female.jpeg";
import AppDroddown from "../../components/ui/drawer-menu/AppDropdown";

function Profile() {
    const theme = useTheme();
    const myNameTopStyle = styles[`name-top__${theme}`];
    const myNameBottomStyle = styles[`name-bottom__${theme}`];
    const navLabelColor = styles[`nav-color__${theme}`];

    return (
        <GenericPage className={styles.profile}>
            <Header variant="left" />

            <main className={styles['profile-container']}>
                <nav className={styles.nav}>
                    <div className={styles['nav__left-container']}>
                        <Photo data={maleImg} size="medium" />
                        <div>
                            <h2 className={`${styles['name-label']} ${myNameTopStyle}`}>TONY</h2>
                            <h2 className={`${styles['name-label']} ${myNameBottomStyle}`}>LE TOMBEUR DE CES DAMES</h2>
                        </div>
                    </div>
                    <div className={styles['nav__right-container']}>
                        <AppDroddown />
                        {/* <IconButton label="FILTRES"/>
                        <IconButton label="CHAT" /> */}
                    </div>
                </nav>

                <div className={`${styles['profile-main-infos']} ${navLabelColor}`}>
                    <div className={styles['profile-main-infos-top']}>
                        <div className={styles['profile-left-infos']}>
                            <h2 className={styles['name-label']}>TONY</h2>
                            <h2 className={styles['name-label']}>LE BEAU GOSSE</h2>
                        </div>

                        <div className={styles['profile-right-infos']}>
                            <h3>23 ans</h3>
                            <h4>100 KM</h4>
                        </div>
                    </div>
                    <div className={styles['profile-main-infos-bottom']}>
                        <Carousel tabPhotos={[maleImg, femaleImg, maleImg, femaleImg, maleImg]} />
                    </div>
                </div>


                <div className={styles['bio-container']}>
                    <Bio value="je suis tony le grand" disabled />
                </div>

                <div className={styles['tags-container']}>
                    <Tags tags={["beer", "football", "love", "yoga"]} />
                </div>

                <div className={styles['button-container']}>
                    <Button type="submit" variant="regular" className={styles['button']}>NOP</Button>
                    <Button type="submit" variant="action-danger" className={styles['button']}>OKAY</Button>
                </div>

            </main>
            <div className={styles['footer-nav']}>
                <IconButton iconColor="#EE8B98" label="MOI" />
                <IconButton iconColor="#EE8B98" label="FILTRES" />
                <IconButton iconColor="#EE8B98" label="CHAT" />
            </div>
        </GenericPage>
    )
}

export default Profile;