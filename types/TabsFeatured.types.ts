export type ItemTabsComponent ={
  label: string;
}

type TabsComponentConfig = {
  tabs: Array<ItemTabsComponent>;
  onActive: (status: number) => void;
}

export default TabsComponentConfig