import logging

from kavenegar import KavenegarAPI

from ..config import settings

logger = logging.getLogger(__name__)


def send_auth_sms_token(mobile: str, token: str, template_name: str) -> bool:
    try:
        api = KavenegarAPI(settings.KAVEHNEGAR_API_KEY)
        params = {
            "receptor": mobile,
            "template": template_name,
            "token": token,
            "type": "sms",
        }
        api.verify_lookup(params)
        return True
    except Exception as e:
        logger.error("send_auth_sms_token: %s", e)
        return False
