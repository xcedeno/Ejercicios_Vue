export const logger = {
  info(message, data) {
    console.log(`Log ${new Intl.DateTimeFormat('es-CL').format(new Date())}: ${message}`);
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  },
};
