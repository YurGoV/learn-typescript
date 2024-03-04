// NOTE: method overload
class User40 {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]) {
    if (skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    } else {
      this.skills.concat(skillOrSkills);
    }
  }
}

// new User().addSkill( ... ) // we have choise there

// NOTE:  function overload
function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
  if (typeof distance === 'string') {
    return distance;
  } else {
    return distance * 1000;
  }
}
// run( ... )
