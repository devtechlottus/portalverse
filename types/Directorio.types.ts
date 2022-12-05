export type ContactData = {
  image?: string;
  name: string;
  email: string;
  phone: string;
};

export type SectionData = {
  title: string;
  description?:string;
  contacts: ContactData[];
};

type DirectoryComponentData = {
  directory: SectionData[];
}

export default DirectoryComponentData