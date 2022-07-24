interface PhoneNumberDictionary {
  // phone은 의미일 뿐, 어떤 키가 와도 다 된다는 뜻
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { Contact, PhoneType }; 