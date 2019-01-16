// @flow

const getRandomColor = () => {
  const colors = [
    { name: 'red', hex: '#B03060' },
    { name: 'orange', hex: '#FE9A76' },
    { name: 'yellow', hex: '#FFD700' },
    { name: 'olive', hex: '#32CD32' },
    { name: 'green', hex: '#016936' },
    { name: 'teal', hex: '#008080' },
    { name: 'blue', hex: '#0E6EB8' },
    { name: 'violet', hex: '#EE82EE' },
    { name: 'purple', hex: '#B413EC' },
    { name: 'pink', hex: '#FF1493' },
    { name: 'brown', hex: '#A52A2A' },
    { name: 'grey', hex: '#A0A0A0' },
    { name: 'black', hex: '#000000' },
  ];

  const { length } = colors;
  const randomIndex = Math.floor(Math.random() * length);

  return colors[randomIndex].hex;
};

export default getRandomColor;
