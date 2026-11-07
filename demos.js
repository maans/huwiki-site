const cards = Array.from(document.querySelectorAll('.demo-card'));
const filters = document.querySelector('.demo-filters');
const count = document.querySelector('.demo-count');

function showTopic(topic) {
  let visible = 0;
  for (const card of cards) {
    card.hidden = topic !== 'all' && card.dataset.category !== topic;
    if (!card.hidden) visible += 1;
  }
  for (const button of filters.querySelectorAll('[data-topic]')) {
    button.setAttribute('aria-pressed', String(button.dataset.topic === topic));
  }
  if (visible === 0) {
    count.textContent = count.dataset.empty;
  } else if (visible === 1) {
    count.textContent = count.dataset.single;
  } else {
    count.textContent = count.dataset.results.replace('{count}', visible);
  }
}

filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-topic]');
  if (button) showTopic(button.dataset.topic);
});

window.addEventListener('hashchange', () => {
  const card = cards.find((item) => '#' + item.id === window.location.hash);
  if (card?.hidden) {
    showTopic('all');
    card.scrollIntoView({ block: 'nearest' });
  }
});

showTopic('all');
filters.hidden = false;
count.hidden = false;

const dialog = document.querySelector('.demo-dialog');
const player = dialog.querySelector('.demo-player');
const heading = dialog.querySelector('h2');
const external = dialog.querySelector('.demo-external');
const privacy = dialog.querySelector('.demo-privacy');
let activeLink;

function buildPlayer(link, title) {
  if (link.dataset.youtube) {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + link.dataset.youtube + '?autoplay=1';
    iframe.title = title;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    return iframe;
  }

  const video = document.createElement('video');
  video.src = link.href;
  video.poster = link.querySelector('img').src;
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute('aria-label', title);
  if (link.dataset.captions) {
    const track = document.createElement('track');
    track.src = link.dataset.captions;
    track.kind = 'captions';
    track.srclang = 'en';
    track.label = 'English';
    video.append(track);
  }
  return video;
}

if (typeof dialog.showModal === 'function') {
  document.querySelector('.demo-grid').addEventListener('click', (event) => {
    const link = event.target.closest('.demo-link');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activeLink = link;
    heading.textContent = link.querySelector('h3').textContent;
    external.href = link.href;
    external.textContent = dialog.dataset[link.dataset.youtube ? 'watch' : 'download'];
    privacy.hidden = link.closest('.demo-card').id !== 'permissions';
    player.replaceChildren(buildPlayer(link, heading.textContent));
    dialog.showModal();
  });

  dialog.addEventListener('close', () => {
    player.replaceChildren();
    activeLink?.focus();
  });
}
