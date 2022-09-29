use community;
create table post (
       id integer not null,
        author varchar(10) not null,
        board_date timestamp not null,
        content varchar(1500) not null,
        recommend integer not null,
        title varchar(100) not null,
        primary key (id)
);
create table freepost (
       id integer not null,
        author varchar(10) not null,
        board_date timestamp not null,
        content varchar(1500) not null,
        recommend integer not null,
        title varchar(100) not null,
        primary key (id)
);
create table informationpost (
       id integer not null,
        author varchar(10) not null,
        board_date timestamp not null,
        content varchar(1500) not null,
        recommend integer not null,
        title varchar(100) not null,
        primary key (id)
);
create table marketpost (
       id integer not null,
        author varchar(10) not null,
        board_date timestamp not null,
        content varchar(1500) not null,
        recommend integer not null,
        title varchar(100) not null,
        primary key (id)
);
create table user (
       id integer not null,
        `name` varchar(10) not null,
        nickname varchar(10) not null unique,
        num varchar(8) not null,
        primary key (id)
);
create table comment (
	id integer not null,
    nick Integer,
    foreign key(nick) references `user`(id) on delete cascade,
    com varchar(150) not null,
    `date` timestamp not null,
    post_id integer,
    foreign key(post_id) references post(id) on delete cascade,
    primary key(id)
);
create table freecomment (
	id integer not null,
    nick Integer,
    foreign key(nick) references `user`(id) on delete cascade,
    com varchar(150) not null,
    `date` timestamp not null,
    free_id integer,
    foreign key(free_id) references freepost(id) on delete cascade,
    primary key(id)
);
create table informationcomment (
	id integer not null,
    nick Integer,
    foreign key(nick) references `user`(id) on delete cascade,
    com varchar(150) not null,
    `date` timestamp not null,
    information_id integer,
    foreign key(information_id) references informationpost(id) on delete cascade,
    primary key(id)
);
create table marketcomment (
	id integer not null,
    nick Integer,
    foreign key(nick) references `user`(id) on delete cascade,
    com varchar(150) not null,
    `date` timestamp not null,
    market_id integer,
    foreign key(market_id) references marketpost(id) on delete cascade,
    primary key(id)
);