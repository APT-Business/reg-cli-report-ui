import { createContainer } from 'unstated-next';
import { useState, useMemo } from 'react';
import { toStructualItems } from '../../utils/transformer';
import { RegStructualItem } from '../../types/reg';
import { EntityContainer } from '../entity/EntityContainer';

export type SidebarValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  newItems: RegStructualItem[];
  passedItems: RegStructualItem[];
  failedItems: RegStructualItem[];
  deletedItems: RegStructualItem[];
};

export const SidebarContainer = createContainer<SidebarValue>(() => {
  const entities = EntityContainer.useContainer();

  const newItems = useMemo(() => toStructualItems(entities.newItems), [entities.newItems]);
  const passedItems = useMemo(() => toStructualItems(entities.passedItems), [entities.passedItems]);
  const failedItems = useMemo(() => toStructualItems(entities.failedItems), [entities.failedItems]);
  const deletedItems = useMemo(() => toStructualItems(entities.deletedItems), [entities.deletedItems]);

  const [isOpen, setOpen] = useState(true);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const toggle = () => setOpen(!isOpen);

  return {
    isOpen,
    open,
    close,
    toggle,
    newItems,
    passedItems,
    failedItems,
    deletedItems,
  };
});
