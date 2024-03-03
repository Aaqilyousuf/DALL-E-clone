import { surpriseMePrompts } from "../constant";
import FileSaver from "file-saver";
export const generatePrompt = (prompt) => {
  const promptIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const getRandomPrompt = surpriseMePrompts[promptIndex];
  if (getRandomPrompt === prompt) {
    return generatePrompt(prompt);
  }
  return getRandomPrompt;
};

export const downloadImg = async (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
