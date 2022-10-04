import logging
from django.conf import settings
from kavenegar import KavenegarAPI

# Get an instance of a logger
logger = logging.getLogger(__name__)

def send_auth_sms_token(mobile:str, token:str, template_name:str):
    try:
        api = KavenegarAPI(settings.KAVEHNEGAR_API_KEY)
        params = {
            'receptor': mobile,
            'template': template_name,
            'token': token,
            'type': 'sms',#sms vs call
        }   
        response = api.verify_lookup(params)
        # print(response)
        return True
    except Exception as e:
        logger.error('send_auth_sms_token: ' + str(e))
        return False