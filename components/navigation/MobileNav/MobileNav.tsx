import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMobileNav,
  selectMobileNavStatus,
} from 'redux/slices/mobileNavSlice';
import { RiCloseLine } from 'react-icons/ri';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export interface MobileNavProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

export const MobileNav = ({
  navigation,
}: Pick<MobileNavProps, 'navigation'>) => {
  const dispatch = useDispatch();
  const { onClose } = useDisclosure();
  const mobileNavOpen = useSelector(selectMobileNavStatus);

  return (
    <Drawer
      isOpen={mobileNavOpen}
      placement="left"
      onClose={onClose}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(closeMobileNav())}
        >
          <RiCloseLine />
        </button>

        <DrawerBody>
          <nav>
            <ul>
              {navigation?.length > 0 &&
                navigation.map((nav) => (
                  <li key={nav?._key} className="link">
                    <SuperLink className="" link={nav}>
                      {nav.title}
                    </SuperLink>
                  </li>
                ))}
            </ul>
          </nav>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
