import icon  from "../../assets/img/notification-icon.svg" /* para voltar a pasta anterior usa ../ e  na mesma pasta ./ */
import "./styles.css"
function NotificationButton() {
    return(
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
                        </div>
    )
}

export default NotificationButton

