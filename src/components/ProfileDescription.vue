<template>
  <div>
    <p>{{ $t('index.about.title') }}</p>
    <p v-html="$t('index.about.first')"></p>
    <p v-html="$t('index.about.second')"></p>
    <p>
      <IconMdi:emoticon-lol
        class="icon"
        style="font-size: 12px; margin-right: 0.6rem; display: inline"
      />
      {{ $t('index.about.third') }}
    </p>
    <p>
      <IconIc:twotone-waving-hand
        style="font-size: 12px; margin-right: 0.6rem; display: inline"
      />
      {{ $t('index.about.fourth') }}
      <span class="blue">{{ $t('index.about.links.jobs') }} </span>,
      <span class="orange">{{ $t('index.about.links.internships') }} </span>,
      <span class="yellow">{{ $t('index.about.links.tutoring') }} </span>,
      <span class="purple">{{ $t('index.about.links.live') }}</span
      >, <span class="green">{{ $t('index.about.links.content') }}</span>
      {{ $t('separator') }}
      <span class="red">{{ $t('index.about.links["open-source"]') }}</span
      >.
    </p>
  </div>
</template>
