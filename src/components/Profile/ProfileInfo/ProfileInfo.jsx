import styles from './ProfileInfo.module.css'
import Preloader from '../../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({ profile, status, updateStatus }) => {

  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large} />

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <div>{profile.aboutMe}</div>
      </div>
    </div>
  )
}

export default ProfileInfo
