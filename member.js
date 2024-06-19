function skillsMember() {
  const member = require('member');
  return {
    name: member.name,
    skills: member.skills
  };
}