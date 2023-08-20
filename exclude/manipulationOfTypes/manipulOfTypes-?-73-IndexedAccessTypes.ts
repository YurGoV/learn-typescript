interface IRole {
  name: string
}

interface IPermission {
  endDate: Date
}
interface IUser {
  name: string,
  roles: IRole[]
  permission: IPermission
}


const user: IUser = {
  name: 'Joe',
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

// eslint-disable-next-line
const nameUser = user['name' ];
const roleNames = 'roles';
// let roleNames = 'roles';
// let roleNames: roles = 'roles';

type RolesType = IUser['roles'];
type RolesTypeTwo = IUser[roleNames];
type RolesTypeThree = IUser[typeof roleNames];

type RoleType = IUser['roles'][number];
type DateType = IUser['permission']['endDate'];

const roles = ['admin', 'user', 'superUser'];
const rolesTwo = ['admin', 'user', 'superUser'] as const;
const RoleTypes = typeof rolesTwo[number]; 
