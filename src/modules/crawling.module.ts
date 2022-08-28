import axios from 'axios';
import * as cheerio from 'cheerio';

const getInflearnHtml = async (keyword: string) => {
  try {
    return await axios.get(
      'https://www.inflearn.com/courses?s=' + encodeURI(keyword)
    );
  } catch (err) {
    console.log(err);
  }
};

const parsing = async (keyword: string, getCourseFunc: Function) => {
  const html = await getCourseFunc(keyword);
  const $ = cheerio.load(html!.data);
  const $courseList = $('.course_card_item');

  let courses = [];
  $courseList.each((idx, node) => {
    const title = $(node).find('.course_title').text();
    console.log(title);
  });
};

export default {
  getInflearnHtml,
  parsing,
};
