const htmlToText = (htmlString: string) => {
  const container = document.createElement('div');
  container.innerHTML = htmlString;
  return container.textContent;
};

export default htmlToText;
