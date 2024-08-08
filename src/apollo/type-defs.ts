import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Social {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;

  // Additional fields from the other version
  @Field(() => String, { nullable: true })
  platform?: string;
}

@ObjectType()
export class Contact {
  @Field(() => String)
  email: string;

  @Field(() => String)
  tel: string;

  @Field(() => [Social])
  social: Social[];

  // Additional field from the other version
  @Field(() => String, { nullable: true })
  address?: string;
}

@ObjectType()
export class Education {
  @Field(() => String)
  school: string;

  @Field(() => String)
  degree: string;

  @Field(() => String)
  start: string;

  @Field(() => String)
  end: string;

  // Additional field from the other version
  @Field(() => String, { nullable: true })
  honors?: string;
}

@ObjectType()
export class Work {
  @Field(() => String)
  company: string;

  @Field(() => String)
  link: string;

  @Field(() => [String])
  badges: string[];

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;
}

@ObjectType()
export class Link {
  @Field(() => String)
  label: string;

  @Field(() => String)
  href: string;
}

@ObjectType()
export class Project {
  @Field(() => String)
  title: string;

  @Field(() => [String])
  techStack: string[];

  @Field(() => String)
  description: string;

  @Field(() => Link, { nullable: true })
  link?: Link;

  // Additional field from the other version
  @Field(() => String, { nullable: true })
  status?: string;
}

@ObjectType()
export class Me {
  @Field(() => String)
  name: string;

  @Field(() => String)
  initials: string;

  @Field(() => String)
  location: string;

  @Field(() => String)
  locationLink: string;

  @Field(() => String)
  about: string;

  @Field(() => String)
  summary: string;

  @Field(() => String)
  avatarUrl: string;

  @Field(() => String)
  personalWebsiteUrl: string;

  @Field(() => Contact)
  contact: Contact;

  @Field(() => [Education])
  education: Education[];

  @Field(() => [Work])
  work: Work[];

  @Field(() => [String])
  skills: string[];

  @Field(() => [Project])
  projects: Project[];

  // Additional field from the other version
  @Field(() => String, { nullable: true })
  linkedinProfile?: string;
}
