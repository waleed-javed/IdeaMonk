import { Task } from "@/lib/types";

export default [
    {
      id: '6c08d1be-1a60-4304-9faa-136b4f76b29c',
      date: 'Wed, 21 Apr 2024 11:57:39 GMT',
      priority:"medium",
      title:
        'Tommorrows Task: A very very long task item title description to see how it will look in app interface',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.  aliquam sapiente consequatur! Excepturi, optio quas?',
      technologies: [
        {
          id: '1',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'React',
          label: 'React',
          version: '1',
        },
        {
          id: '2',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'Node',
          label: 'Node',
          version: '1',
        },
        {
          id: '3',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'AWS',
          label: 'AWS',
          version: '1',
        },
      ],
      isFinished: true,
      images: [
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b29c', url: 'https://picsum.photos/200/300' },
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b30b', url: 'https://picsum.photos/200/300' },
      ],
    },
    {
      id: '21d8bc1a-06d0-4947-a1fb-61285111e053',
      date: 'Wed, 20 Apr 2024 11:57:39 GMT',
      priority:"medium",
      title: 'today:  Task 2',
      description: 'Task 2 description',
      technologies: [
        {
          id: '2',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'Node',
          label: 'Node',
          version: '2',
        },
      ],
      isFinished: false,
      images: [
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b28c', url: 'https://picsum.photos/200/300' },
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b31b', url: 'https://picsum.photos/200/300' },
      ],
    },
    {
      id: '2a66a11f-3668-482e-aa52-a07f3fec77da',
      date: 'Wed, 19 Apr 2024 11:57:39 GMT',
      priority:"high",
      title: 'today: Task 3',
      description: 'Task 3 description',
      technologies: [
        {
          id: '3',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'Next',
          label: 'Next',
          version: '3',
        },
      ],
      isFinished: false,
      images: [
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b27c', url: 'https://picsum.photos/200/300' },
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b32b', url: 'https://picsum.photos/200/300' },
      ],
    },
    {
      id: '2001e82c-f158-435c-b9d5-c5c9ae56aa12',
      date: 'Wed, 18 Apr 2024 11:57:39 GMT',
      priority:"low",
      title: 'yesterday: Task 4',
      description: 'Task 4 description',
      technologies: [
        {
          id: '4',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'AWS',
          label: 'AWS',
          version: '4',
        },
      ],
      isFinished: false,
      images: [
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b26c', url: 'https://picsum.photos/200/300' },
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b33b', url: 'https://picsum.photos/200/300' },
      ],
    },
    {
      id: 'b0e29691-6625-42ae-ad15-0794ba9094d2',
      date: 'Wed, 16 Apr 2024 11:57:39 GMT',
      priority:"high",
      title: 'Older: Task 5',
      description: 'Task 5 description',
      technologies: [
        {
          id: '5',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'MongoDB',
          label: 'Mondo Db',
          version: '5',
        },
      ],
      isFinished: false,
      images: [
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b25c', url: 'https://picsum.photos/200/300' },
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b33b', url: 'https://picsum.photos/200/300' },
      ],
    },
    {
      id: 'b0e29691-6625-42ae-ad15-0794ba9095d2',
      date: 'Wed, 12 Apr 2024 11:57:39 GMT',
      title: 'Older:Task 6',
      priority:"high",
      description: 'Task 6 description',
      technologies: [
        {
          id: '5',
          url: 'https://sample.org',
          icon: 'https://picsum.photos/200',
          value: 'MongoDB',
          label: 'Mondo Db',
          version: '5',
        },
      ],
      isFinished: false,
      images: [
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b25c', url: 'https://picsum.photos/200/300' },
        { id: '6c08d1be-1a60-4304-9faa-136b4f76b33b', url: 'https://picsum.photos/200/300' },
      ],
    },
  ] as Task[]