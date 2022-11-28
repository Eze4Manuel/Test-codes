import {
  ambienceLeadLinks,
  associatePastorLinks,
  celebKidsLeadLinks,
  followUpLeadLinks,
  leadPastorLinks,
  mediaLeadLinks,
  memberLinks,
  outburstMusicLeadLinks,
  protocolLeadLinks,
  residentPastorLinks,
  sanctuaryKeepersLeadLinks,
} from '@/layouts/AuthLayout/data';
import RoleName from '@/types/Role.type';
import ServiceUnit from '@/types/ServiceUnit.type';

export const processRole: (
  role?: string,
  unit?: string
) => {
  urlForm: string;
  longForm: string;
  sideNavLinks: {
    icon: string;
    title: string;
    url: string;
  }[];
} = (role, unit) => {
  switch (role) {
    case RoleName.MEMBER:
      return {
        urlForm: 'member',
        longForm: 'Member',
        sideNavLinks: memberLinks,
      };

    case RoleName.SUPER_ADMIN:
      return {
        urlForm: 'resident-pastor',
        longForm: 'Resident Pastor',
        sideNavLinks: residentPastorLinks,
      };

    case RoleName.ADMIN:
      return {
        urlForm: 'associate-pastor',
        longForm: 'Associate Pastor',
        sideNavLinks: associatePastorLinks,
      };

    case RoleName.OWNER:
      return {
        urlForm: 'lead-pastor',
        longForm: 'Lead Pastor',
        sideNavLinks: leadPastorLinks,
      };

    case 'LEAD':
      switch (unit) {
        case ServiceUnit.FOLLOW_UP_UNIT:
          return {
            urlForm: 'follow-up-lead',
            longForm: 'Service Unit Lead - Follow-up Unit',
            sideNavLinks: followUpLeadLinks,
          };

        case ServiceUnit.AMBIENCE_UNIT:
          return {
            urlForm: 'ambience-lead',
            longForm: 'Service Unit Lead - Ambience Unit',
            sideNavLinks: ambienceLeadLinks,
          };

        case ServiceUnit.CELEB_KIDS_UNIT:
          return {
            urlForm: 'celeb-kids-lead',
            longForm: 'Service Unit Lead - Celeb Kids',
            sideNavLinks: celebKidsLeadLinks,
          };

        case ServiceUnit.MEDIA_AND_TECHNICAL_UNIT:
          return {
            urlForm: 'media-lead',
            longForm: 'Service Unit Lead - Media and Technical Unit',
            sideNavLinks: mediaLeadLinks,
          };

        case ServiceUnit.OUTBURST_MUSIC_GROUP_UNIT:
          return {
            urlForm: 'outburst-music-lead',
            longForm: 'Service Unit Lead - Outburst Music',
            sideNavLinks: outburstMusicLeadLinks,
          };

        case ServiceUnit.PROTOCOL_UNIT:
          return {
            urlForm: 'protocol-lead',
            longForm: 'Service Unit Lead - Protocol Unit',
            sideNavLinks: protocolLeadLinks,
          };

        case ServiceUnit.SANCTUARY_KEEPERS_UNIT:
          return {
            urlForm: 'sanctuary-keepers-lead',
            longForm: 'Service Unit Lead - Sanctuary Keepers Unit',
            sideNavLinks: sanctuaryKeepersLeadLinks,
          };

        default:
          return {
            urlForm: '',
            longForm: '',
            sideNavLinks: [],
          };
      }

    default:
      return {
        urlForm: '',
        longForm: '',
        sideNavLinks: [],
      };
  }
};
